const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/toolbox',
  assetPrefix: '/toolbox',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = withNextra(nextConfig);
