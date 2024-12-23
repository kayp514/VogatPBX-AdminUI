import { type } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        DATABASE_URL: process.env.DATABASE_URL,
    },

    async rewrites() {
        return [
            {
                source: '/:path*',
                has: [
                {
                    type: 'host',
                    value: '(?<domain>.+).vgtpbx.dev',
                },
                ],
                destination: '/:path*',
            },
        ];
    },
};

export default nextConfig;
