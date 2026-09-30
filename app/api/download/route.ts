import { serveFile } from "@/lib/serve";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// /api/download → the default file (DOWNLOAD_FILE, else the first file in /files)
export const GET = (req: Request) => serveFile(req, "GET");
export const HEAD = (req: Request) => serveFile(req, "HEAD");
