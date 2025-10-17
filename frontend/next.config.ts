import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites(){
    return[
      {
        source: '/api/:path*', 
        destination: `${process.env.BACKEND_URL}/:path*` 
      }
    ]
  },
  /* config options here */
  webpack: (config) =>{
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
};

export default nextConfig;
