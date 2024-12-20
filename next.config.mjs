/** @type {import('next').NextConfig} */
const nextConfig = {
      output: 'export',
      trailingSlash: true,
      reactStrictMode: true,
      swcMinify: true,
      images: {
        unoptimized: true,
      },
    }

export default nextConfig;

