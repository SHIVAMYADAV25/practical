import { readdir, realpath, stat } from "node:fs/promises";
import path from "node:path";

/** Every sub-folder of /folders is one downloadable folder. */
const FOLDERS_DIR = path.join(process.cwd(), "folders");

const IGNORED = new Set([".DS_Store", ".git", "node_modules", "Thumbs.db"]);

export type FolderFile = {
  /** Path relative to the folder, always with "/" separators. */
  path: string;
  /** Absolute path on disk (never sent to clients). */
  abs: string;
  size: number;
  mtime: number; // unix seconds
  mode: number; // e.g. 0o644
};

export type Folder = { name: string; files: FolderFile[] };

function safeName(name: string) {
  return (
    !!name &&
    name === path.basename(name) &&
    !name.startsWith(".") &&
    !name.includes("\0") &&
    !name.includes("\\")
  );
}

/** Names of all downloadable folders, sorted. */
export async function listFolders(): Promise<string[]> {
  try {
    const entries = await readdir(FOLDERS_DIR, { withFileTypes: true });
    return entries
      .filter((e) => e.isDirectory() && safeName(e.name))
      .map((e) => e.name)
      .sort();
  } catch {
    return [];
  }
}

async function walk(base: string, dir: string, out: FolderFile[]) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    if (IGNORED.has(e.name) || e.isSymbolicLink()) continue; // no symlinks: nothing can escape
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      await walk(base, full, out);
    } else if (e.isFile()) {
      const info = await stat(full);
      out.push({
        path: path.relative(base, full).split(path.sep).join("/"),
        abs: full,
        size: info.size,
        mtime: Math.floor(info.mtimeMs / 1000),
        mode: info.mode & 0o777,
      });
    }
  }
}

/** Returns the folder and every file inside it (recursively), or null. */
export async function getFolder(name: string): Promise<Folder | null> {
  if (!safeName(name)) return null;
  try {
    const root = await realpath(FOLDERS_DIR);
    const dir = await realpath(path.join(root, name));
    if (!dir.startsWith(root + path.sep)) return null;
    if (!(await stat(dir)).isDirectory()) return null;

    const files: FolderFile[] = [];
    await walk(dir, dir, files);
    files.sort((a, b) => (a.path < b.path ? -1 : 1));
    return { name, files };
  } catch {
    return null;
  }
}
