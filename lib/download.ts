import { readdir, realpath, stat } from "node:fs/promises";
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

/** Resolves a plain file name inside /files. Returns null if unsafe or missing. */
async function resolveInside(name: string): Promise<DownloadTarget | null> {
  // Plain file names only: no folders, no traversal, no hidden files.
  if (!name || name !== path.basename(name) || name.startsWith(".")) return null;
  if (name.includes("\0") || name.includes("\\")) return null;

  try {
    const root = await realpath(FILES_DIR);
    const resolved = await realpath(path.resolve(root, name));
    if (!resolved.startsWith(root + path.sep)) return null;

    const info = await stat(resolved);
    if (!info.isFile()) return null;

    return {
      path: resolved,
      size: info.size,
      name,
      mime: MIME[path.extname(name).toLowerCase()] ?? "application/octet-stream",
    };
  } catch {
    return null;
  }
}

/** Names of all downloadable files, sorted. */
export async function listFiles(): Promise<string[]> {
  try {
    const entries = await readdir(FILES_DIR);
    const checked = await Promise.all(
      entries.map(async (n) => ((await resolveInside(n)) ? n : null)),
    );
    return checked.filter((n): n is string => n !== null).sort();
  } catch {
    return [];
  }
}

/**
 * With a name: that file.
 * Without: DOWNLOAD_FILE if set, otherwise the first file in /files.
 */
export async function getDownloadTarget(
  name?: string,
): Promise<DownloadTarget | null> {
  if (name !== undefined) return resolveInside(name);

  const preferred = process.env.DOWNLOAD_FILE?.trim();
  if (preferred) {
    const hit = await resolveInside(preferred);
    if (hit) return hit;
  }
  const [first] = await listFiles();
  return first ? resolveInside(first) : null;
}

/** Content-Disposition value safe for non-ASCII and quote characters. */
export function contentDisposition(name: string): string {
  const ascii = name.replace(/[^\x20-\x7e]/g, "_").replace(/["\\]/g, "_");
  return `attachment; filename="${ascii}"; filename*=UTF-8''${encodeURIComponent(name)}`;
}
