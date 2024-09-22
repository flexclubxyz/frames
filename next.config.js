/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript type errors during build
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Avoid bundling 'fs' and other node modules in client-side code
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
        url: false,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
