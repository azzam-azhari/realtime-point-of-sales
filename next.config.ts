import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  devIndicators: false,
  images: {
    domains: ['https://wdqudwvjqkggfottxwsr.supabase.co', 'https://wdqudwvjqkggfottxwsr.storage.supabase.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wdqudwvjqkggfottxwsr.supabase.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'wdqudwvjqkggfottxwsr.storage.supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
