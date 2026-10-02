import { listFolders } from "@/lib/folders";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// /api/folders → one folder name per line
export async function GET() {
  const names = await listFolders();
  return new Response(names.length ? names.join("\n") + "\n" : "", {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
  });
}
