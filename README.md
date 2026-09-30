# download-site

A tiny Next.js site that serves one file from `/files` at `/api/download`.

## Development

```bash
pnpm install
pnpm dev
```

## Add files

Put any files in `/files`. That's it. Commit and redeploy.

Optional: set `DOWNLOAD_FILE=name.zip` (in `.env.local` or the Vercel env settings) to choose which file the default URL serves. If unset, the first file (alphabetically) is used.

## Three ways to download

| What | URL |
| --- | --- |
| Default file | `/api/download` |
| A specific file | `/api/download/<file name>` |
| List all files | `/api/files` |

## Browser

Open the site and click the ↓ button in the bottom-right corner (downloads the default file).

## Terminal (replace `BASE` with `http://localhost:3000` or your https domain)

Use **https** on deployed sites. `-OJ` saves the file under the name the server sends, so you never type a file name.

```bash
# list
curl BASE/api/files

# default file, real name kept (Linux / macOS)
curl -LOJ BASE/api/download

# specific file
curl -LOJ BASE/api/download/IOT-main.zip

# wget
wget --content-disposition BASE/api/download
```

Windows PowerShell: same commands with `curl.exe` instead of `curl`.

Always check the saved file size. A few bytes means an error message was saved, not the file.

## Production

```bash
pnpm build
pnpm start
```

## Notes

- The file is streamed from disk, not loaded into memory.
- `HEAD` and single-range (`Range: bytes=...`) requests are supported, so interrupted downloads can resume (`curl -C -`).
- Paths (including symlinks) that resolve outside `/files` return 404.
- Missing file: `404 File unavailable.` Any other failure: `500 Server error.`
- `next.config.ts` uses `outputFileTracingIncludes` so `/files` is bundled on Vercel. Don't remove it.
- Browser download indicators are controlled by the browser and OS, not by this app.
