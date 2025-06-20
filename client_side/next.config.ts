import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: ['smartteam.local', 'smartteam.api.local'],
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: `${process.env.NEXT_PUBLIC_SERVERSIDE_URL}/api/:path*`
            }
        ]
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
