import { getFolder } from "@/lib/folders";
import { tarStream } from "@/lib/tar";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ name: string }> };

const plain = (body: string, status: number) =>
  new Response(body, {
    status,
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
  });

// /api/folders/<name> → the folder as a live tar stream (no zip, nothing stored on the server).
//   curl -fsS BASE/api/folders/<name> | tar -x     → creates ./<name>/ with all files
export async function GET(_req: Request, ctx: Ctx) {
  try {
    const { name } = await ctx.params;
    const folder = await getFolder(decodeURIComponent(name));
    if (!folder) return plain("Folder unavailable.", 404);

    return new Response(tarStream(folder.name, folder.files), {
      headers: {
        "Content-Type": "application/x-tar",
        "Content-Disposition": `attachment; filename="${encodeURIComponent(folder.name)}.tar"`,
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return plain("Server error.", 500);
  }
}
