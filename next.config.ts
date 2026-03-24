import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.1.6",
    "localhost",
    "home.xiaokubao.space"
  ],
};

export default nextConfig;
