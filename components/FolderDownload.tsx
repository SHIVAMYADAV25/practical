"use client";

import { useEffect, useState } from "react";

type Manifest = { name: string; files: { path: string; size: number }[] };

// Minimal types for the File System Access API (not in TypeScript's DOM lib everywhere).
type DirHandle = {
  getDirectoryHandle(name: string, o?: { create?: boolean }): Promise<DirHandle>;
  getFileHandle(
    name: string,
    o?: { create?: boolean },
  ): Promise<{ createWritable(): Promise<WritableStream<Uint8Array>> }>;
};
type Picker = { showDirectoryPicker(o?: { mode?: "read" | "readwrite" }): Promise<DirHandle> };

export default function FolderDownload({ name }: { name: string }) {
  const [supported, setSupported] = useState(false);
  const [origin, setOrigin] = useState("");
  const [status, setStatus] = useState<"idle" | "busy" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setSupported("showDirectoryPicker" in window);
    setOrigin(window.location.origin);
  }, []);

  const base = `/api/folders/${encodeURIComponent(name)}`;
  const curl = `curl -fsS ${origin}${base} | tar -x`;

  async function downloadFolder() {
    try {
      // 1. user picks WHERE the folder should be created
      const parent = await (window as unknown as Picker).showDirectoryPicker({ mode: "readwrite" });

      setStatus("busy");
      setMessage("Starting…");

      // 2. what is inside the folder?
      const res = await fetch(`${base}/manifest`);
      if (!res.ok) throw new Error("Folder unavailable.");
      const manifest: Manifest = await res.json();

      // 3. create <picked location>/<folder name>/ and write every file into it
      const root = await parent.getDirectoryHandle(manifest.name, { create: true });
      let done = 0;

      for (const f of manifest.files) {
        const parts = f.path.split("/");
        const fileName = parts.pop() as string;

        let dir = root;
        for (const part of parts) dir = await dir.getDirectoryHandle(part, { create: true });

        const r = await fetch(`${base}/files/${f.path.split("/").map(encodeURIComponent).join("/")}`);
        if (!r.ok || !r.body) throw new Error(`Could not download ${f.path}`);

        const writable = await (await dir.getFileHandle(fileName, { create: true })).createWritable();
        await r.body.pipeTo(writable); // closes the file when finished

        done++;
        setMessage(`${done} / ${manifest.files.length} files`);
      }

      setStatus("done");
      setMessage(`Saved ${manifest.files.length} files`);
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") {
        setStatus("idle"); // user closed the picker
        setMessage("");
        return;
      }
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Download failed.");
    }
  }

  return (
    <div className="folder-actions">
      {supported ? (
        <button className="btn" onClick={downloadFolder} disabled={status === "busy"}>
          {status === "busy" ? "Downloading…" : "Download folder"}
        </button>
      ) : (
        <p className="hint">
          Folder download needs Chrome, Edge or Brave on a computer. Use the terminal command below instead.
        </p>
      )}

      {message && (
        <span className={status === "error" ? "msg error" : "msg"} role="status">
          {message}
        </span>
      )}

      <details>
        <summary>Terminal</summary>
        <code className="cmd">{curl}</code>
        <button className="btn small" onClick={() => navigator.clipboard.writeText(curl)}>
          Copy
        </button>
      </details>
    </div>
  );
}
