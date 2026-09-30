import { realpath, stat } from "node:fs/promises";
import path from "node:path";

const FILES_DIR = path.join(process.cwd(), "files");

const MIME: Record<string, string> = {
  ".zip": "application/zip",
  ".exe": "application/vnd.microsoft.portable-executable",
  ".pdf": "application/pdf",
  ".tar": "application/x-tar",
  ".gz": "application/gzip",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".mp4": "video/mp4",
  ".txt": "text/plain; charset=utf-8",
  ".json": "application/json",
};

export type DownloadTarget = {
  path: string;
  size: number;
  name: string;
  mime: string;
};

/**
 * Resolves the configured file. Returns null if it is missing, not a file,
 * or would resolve outside /files (path traversal or symlink escape).
 */
export async function getDownloadTarget(): Promise<DownloadTarget | null> {
  const configured = process.env.DOWNLOAD_FILE?.trim();
  if (!configured) return null;

  try {
    const root = await realpath(FILES_DIR);
    const resolved = await realpath(path.resolve(root, configured));
    if (!resolved.startsWith(root + path.sep)) return null;

    const info = await stat(resolved);
    if (!info.isFile()) return null;

    const name = process.env.DOWNLOAD_NAME?.trim() || path.basename(resolved);
    const mime =
      MIME[path.extname(resolved).toLowerCase()] ?? "application/octet-stream";

    return { path: resolved, size: info.size, name, mime };
  } catch {
    return null;
  }
}

/** Content-Disposition value safe for non-ASCII and quote characters. */
export function contentDisposition(name: string): string {
  const ascii = name.replace(/[^\x20-\x7e]/g, "_").replace(/["\\]/g, "_");
  return `attachment; filename="${ascii}"; filename*=UTF-8''${encodeURIComponent(name)}`;
}
