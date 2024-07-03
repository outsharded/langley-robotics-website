/** @type {import('next').NextConfig} */
const nextConfig = {
    headers: {
        key: 'Cache-Control', value: 'max-age=86400',
        key: 'themeColour', value:
            [
                { media: '(prefers-color-scheme: light)', color: '#f5f5f4' },
                { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
            ],
    },
    experimental: {
        staleTimes: {
          dynamic: 300,
          static: 3600,
        },
      },
};

export default nextConfig;
