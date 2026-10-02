import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /files and /folders are read at runtime, so bundlers can't see them. Without this,
  // Vercel deploys the functions WITHOUT these directories.
  outputFileTracingIncludes: {
    "/": ["./folders/**/*"],
    "/api/folders": ["./folders/**/*"],
    "/api/folders/*": ["./folders/**/*"],
    "/api/folders/*/manifest": ["./folders/**/*"],
    "/api/folders/*/files/*": ["./folders/**/*"],
    "/api/download": ["./files/**/*"],
    "/api/download/*": ["./files/**/*"],
    "/api/files": ["./files/**/*"],
  },
};

export default nextConfig;
