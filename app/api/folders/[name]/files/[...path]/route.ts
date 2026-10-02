import { createReadStream } from "node:fs";
import { Readable } from "node:stream";
import { getFolder } from "@/lib/folders";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ name: string; path: string[] }> };

// /api/folders/<name>/files/<relative/path> → one file inside the folder
// Only paths that are really listed in the folder are served, so traversal is impossible.
export async function GET(_req: Request, ctx: Ctx) {
  try {
    const { name, path } = await ctx.params;
    const folder = await getFolder(decodeURIComponent(name));
    const rel = path.map(decodeURIComponent).join("/");
    const file = folder?.files.find((f) => f.path === rel);
    if (!file) return new Response("File unavailable.", { status: 404 });

    const body =
      file.size === 0
        ? null
        : (Readable.toWeb(createReadStream(file.abs)) as ReadableStream);

    return new Response(body, {
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Length": String(file.size),
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new Response("Server error.", { status: 500 });
  }
}
