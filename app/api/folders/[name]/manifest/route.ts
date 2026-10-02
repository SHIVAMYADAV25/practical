import { getFolder } from "@/lib/folders";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ name: string }> };

// /api/folders/<name>/manifest → { name, files: [{ path, size }] } (used by the browser button)
export async function GET(_req: Request, ctx: Ctx) {
  try {
    const { name } = await ctx.params;
    const folder = await getFolder(decodeURIComponent(name));
    if (!folder) return new Response("Folder unavailable.", { status: 404 });

    return Response.json(
      { name: folder.name, files: folder.files.map(({ path, size }) => ({ path, size })) },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return new Response("Server error.", { status: 500 });
  }
}
