/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Bypass Next.js server-side image optimization so the browser fetches
    // Unsplash URLs directly. This prevents 404s caused by the optimization
    // proxy being unable to reach external domains in certain environments.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;
