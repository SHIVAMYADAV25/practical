import { createReadStream } from "node:fs";
import { Readable } from "node:stream";
import { contentDisposition, getDownloadTarget } from "@/lib/download";

const text = (body: string, status: number) =>
  new Response(body, {
    status,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });

export { text };

/** Parses a single "bytes=a-b" range. null = none/unsupported, "invalid" = unsatisfiable. */
function parseRange(header: string | null, size: number) {
  if (!header) return null;
  const m = /^bytes=(\d*)-(\d*)$/.exec(header.trim());
  if (!m || (m[1] === "" && m[2] === "")) return null;

  let start: number;
  let end: number;
  if (m[1] === "") {
    const suffix = Number(m[2]);
    if (suffix === 0) return "invalid" as const;
    start = Math.max(size - suffix, 0);
    end = size - 1;
  } else {
    start = Number(m[1]);
    end = m[2] === "" ? size - 1 : Math.min(Number(m[2]), size - 1);
  }
  if (start >= size || start > end) return "invalid" as const;
  return { start, end };
}

export async function serveFile(
  req: Request,
  method: "GET" | "HEAD",
  name?: string,
) {
  try {
    const file = await getDownloadTarget(name);
    if (!file) return text("File unavailable.", 404);

    const headers: Record<string, string> = {
      "Content-Type": file.mime,
      "Content-Disposition": contentDisposition(file.name),
      "Accept-Ranges": "bytes",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    };

    const range = parseRange(req.headers.get("range"), file.size);

    if (range === "invalid") {
      return new Response(null, {
        status: 416,
        headers: { ...headers, "Content-Range": `bytes */${file.size}` },
      });
    }

    const status = range ? 206 : 200;
    const start = range ? range.start : 0;
    const end = range ? range.end : file.size - 1;
    const length = file.size === 0 ? 0 : end - start + 1;

    headers["Content-Length"] = String(length);
    if (range) headers["Content-Range"] = `bytes ${start}-${end}/${file.size}`;

    if (method === "HEAD" || length === 0) {
      return new Response(null, { status, headers });
    }

    const stream = Readable.toWeb(
      createReadStream(file.path, { start, end }),
    ) as ReadableStream;

    return new Response(stream, { status, headers });
  } catch {
    return text("Server error.", 500);
  }
}
