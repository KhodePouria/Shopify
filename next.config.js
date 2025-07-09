/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Add this to ensure Prisma can work with the webpack setup
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Fix for Prisma client on Vercel deployments
      config.externals = [...config.externals, '@prisma/client', 'prisma'];
    }
    return config;
  },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "dummyjson.com",
      "cdn.dummyjson.com", // Add this domain
    ],
  },
}

module.exports = nextConfig
