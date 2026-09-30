import { listFiles } from "@/lib/download";
import { text } from "@/lib/serve";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// /api/files → plain-text list, one file name per line
export async function GET() {
  const files = await listFiles();
  return text(files.length ? files.join("\n") + "\n" : "", 200);
}
