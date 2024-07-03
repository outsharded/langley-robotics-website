/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        staleTimes: {
          dynamic: 300,
          static: 3600,
        },
      },
};

export default nextConfig;
