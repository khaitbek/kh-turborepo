/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["ui"],
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ["https://isnur.netlify.app"],
    },
}

module.exports = nextConfig
