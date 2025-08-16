import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default withPWA({
  ...nextConfig,
  pwa: {
    dest: "public",      // service worker files go here
    register: true,      // auto-register service worker
    skipWaiting: true,   // activate new service worker immediately
  },
} as any);
