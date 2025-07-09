import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: [
        'http://server.dev.local'
    ],
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: `${process.env.NEXT_PUBLIC_SERVERSIDE_URL}/api/:path*`
            }
        ]
    },
    async headers() {
        return [
            {
                source: '/_next/webpack-hmr', // Or whatever the HMR path is
                headers: [
                    { key: 'Access-Control-Allow-Origin', value: 'http://client.dev.local' },
                    { key: 'Access-Control-Allow-Methods', value: 'GET,HEAD,PUT,PATCH,POST,DELETE' },
                    { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
                    { key: 'Access-Control-Allow-Credentials', value: 'true' },
                ],
            },
            // You might need a broader rule for all origins during development
            {
                source: '/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Origin', value: '*' }, // Very broad, but useful for dev
                ],
            },
        ];
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
};

export default nextConfig;
