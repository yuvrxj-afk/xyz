import type { NextConfig } from 'next';

const staticExport = process.env.STATIC_EXPORT === 'true';
const basePath = (process.env.BASE_PATH || '').trim().replace(/\/$/, '');

const nextConfig: NextConfig = {
  ...(staticExport && { output: 'export' as const }),
  /** GitHub Pages project sites need trailing slash for clean directory URLs. */
  ...(staticExport && { trailingSlash: true }),
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    ...(staticExport ? { unoptimized: true } : {}),
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagekit.io',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dribbble.com',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
      {
        protocol: 'https',
        hostname: 'images-na.ssl-images-amazon.com',
      },
    ],
  },
};

export default nextConfig;
