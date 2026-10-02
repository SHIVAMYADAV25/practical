import { createReadStream } from "node:fs";
import type { FolderFile } from "@/lib/folders";

const BLOCK = 512;

function octal(value: number, length: number) {
  return value.toString(8).padStart(length - 1, "0") + "\0";
}

/** Splits a long path into ustar "prefix" + "name" fields. */
function splitName(p: string): [prefix: string, name: string] {
  if (Buffer.byteLength(p) <= 100) return ["", p];
  for (let i = p.indexOf("/"); i !== -1; i = p.indexOf("/", i + 1)) {
    const prefix = p.slice(0, i);
    const name = p.slice(i + 1);
    if (Buffer.byteLength(prefix) <= 155 && Buffer.byteLength(name) <= 100) {
      return [prefix, name];
    }
  }
  throw new Error(`Path too long for tar: ${p}`);
}

function header(
  p: string,
  size: number,
  mtime: number,
  mode: number,
  isDir: boolean,
): Buffer {
  const buf = Buffer.alloc(BLOCK);
  const [prefix, name] = splitName(p);

  buf.write(name, 0, 100);
  buf.write(octal(mode, 8), 100);
  buf.write(octal(0, 8), 108); // uid
  buf.write(octal(0, 8), 116); // gid
  buf.write(octal(size, 12), 124);
  buf.write(octal(mtime, 12), 136);
  buf.write("        ", 148); // checksum placeholder (8 spaces)
  buf.write(isDir ? "5" : "0", 156);
  buf.write("ustar\0", 257);
  buf.write("00", 263);
  buf.write(prefix, 345, 155);

  let sum = 0;
  for (const byte of buf) sum += byte;
  buf.write(octal(sum, 7) + " ", 148);
  return buf;
}

async function* generate(rootName: string, files: FolderFile[]) {
  yield header(`${rootName}/`, 0, Math.floor(Date.now() / 1000), 0o755, true);

  for (const f of files) {
    yield header(`${rootName}/${f.path}`, f.size, f.mtime, f.mode || 0o644, false);

    let sent = 0;
    if (f.size > 0) {
      for await (const chunk of createReadStream(f.abs, { start: 0, end: f.size - 1 })) {
        sent += (chunk as Buffer).length;
        yield chunk as Buffer;
      }
    }
    // keep the archive valid even if the file shrank while streaming
    const pad = (BLOCK - (f.size % BLOCK)) % BLOCK + (f.size - sent);
    if (pad > 0) yield Buffer.alloc(pad);
  }

  yield Buffer.alloc(BLOCK * 2); // end-of-archive marker
}

/** Streams `rootName/…` as a tar archive. Nothing is buffered or written to disk. */
export function tarStream(rootName: string, files: FolderFile[]) {
  const it = generate(rootName, files);
  return new ReadableStream<Uint8Array>({
    async pull(controller) {
      try {
        const { value, done } = await it.next();
        if (done) controller.close();
        else controller.enqueue(value);
      } catch (err) {
        controller.error(err);
      }
    },
    async cancel() {
      await it.return(undefined);
    },
  });
}
