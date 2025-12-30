import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
