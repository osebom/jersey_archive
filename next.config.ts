import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/category/2026-27",
        destination: "/category/club-jerseys",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
