import { serveFile } from "@/lib/serve";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ name: string }> };

async function nameOf(ctx: Ctx) {
  const { name } = await ctx.params;
  try {
    return decodeURIComponent(name);
  } catch {
    return name;
  }
}

// /api/download/<file name> → that specific file
export const GET = async (req: Request, ctx: Ctx) =>
  serveFile(req, "GET", await nameOf(ctx));
export const HEAD = async (req: Request, ctx: Ctx) =>
  serveFile(req, "HEAD", await nameOf(ctx));
