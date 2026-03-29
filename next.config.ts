import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";


const withNextIntl = createNextIntlPlugin('./src/i18n-request.ts');

const nextConfig: NextConfig = {
  output: "export",
  allowedDevOrigins: [
    "192.168.1.6",
    "localhost",
    "home.xiaokubao.space",
    "www.geometryvision.com",
    "geometryvision.com"
  ],
  // 移除 X-Powered-By 头部
  poweredByHeader: false,
  // 生成 ETags
  generateEtags: true,
  // 图片优化配置
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // 启用压缩
  compress: true,
};

export default withNextIntl(nextConfig);
