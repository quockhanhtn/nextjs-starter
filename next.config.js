/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx'],
  images: {
    domains: ['images.unsplash.com', 'img.freepik.com'],
  },
  output: 'standalone',
  distDir: '.next',
  productionBrowserSourceMaps: true,
  cleanDistDir: true,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
