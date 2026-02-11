import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Redirect /login and /signup to the app subdomain
  async redirects() {
    return [
      {
        source: '/login',
        destination: 'https://app.taxfolio.io/login',
        permanent: false,
      },
      {
        source: '/signup',
        destination: 'https://app.taxfolio.io/signup',
        permanent: false,
      },
      {
        source: '/dashboard',
        destination: 'https://app.taxfolio.io/dashboard',
        permanent: false,
      },
      {
        source: '/onboarding',
        destination: 'https://app.taxfolio.io/onboarding',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
