import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /files is read at runtime, so bundlers can't see it. Without this,
  // Vercel deploys the functions WITHOUT the files folder.
  outputFileTracingIncludes: {
    "/api/download": ["./files/**/*"],
    "/api/download/*": ["./files/**/*"],
    "/api/files": ["./files/**/*"],
  },
};

export default nextConfig;
