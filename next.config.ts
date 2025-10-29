import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  skipTrailingSlashRedirect: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
