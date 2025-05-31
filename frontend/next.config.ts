import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "variables.scss";`, 
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://backend:4000/:path*', // Talk to backend container
      },
    ];
  },
};

export default nextConfig;
