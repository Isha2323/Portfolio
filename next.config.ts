import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true, // Required because image optimization needs a server
  },
  basePath: "/Portfolio.git",
};

export default nextConfig;
