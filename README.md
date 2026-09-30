# download-site

A tiny Next.js site that serves one file from `/files` at `/api/download`.

## Development

```bash
pnpm install
pnpm dev
```

## Add a file

Put your file in `/files` and set it in `.env.local`:

```env
DOWNLOAD_FILE=IOT-main.zip
# DOWNLOAD_NAME=IOT-main.zip   (optional, name shown to the downloader)
```

Restart the server after changing the env file. The file is never placed in `/public`, so it can only be reached through `/api/download`.

## Browser

Open `http://localhost:3000` and click the ↓ button in the bottom-right corner.

## Terminal

Linux / macOS:

```bash
curl -L http://localhost:3000/api/download -o IOT-main.zip
```

Windows PowerShell:

```powershell
curl.exe -L http://localhost:3000/api/download -o IOT-main.zip
```

wget:

```bash
wget http://localhost:3000/api/download -O IOT-main.zip
```

Headers only: `curl -I http://localhost:3000/api/download`

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
- Browser download indicators are controlled by the browser and OS, not by this app.
