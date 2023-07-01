/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx'],
  images: {
    domains: ['images.unsplash.com'],
  },
  output: 'standalone',
};

module.exports = nextConfig;
