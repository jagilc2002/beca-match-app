/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'p16-common-sign.tiktokcdn.com',
      },
    ],
  },
};

export default nextConfig;
