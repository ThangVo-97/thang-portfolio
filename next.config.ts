import type { NextConfig } from "next";

// For GitHub Pages under a sub-path (e.g. /portfolio), set NEXT_PUBLIC_BASE_PATH=/portfolio at build time.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
