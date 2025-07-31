import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '***',
        
      },
      
    ],
    domains: [`${process.env.NEXT_PUBLIC_URL}`],
  },
};

export default nextConfig;
