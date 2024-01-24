const withContentLayer = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["ui"],
    experimental: {
        serverActions: true,
    },
    i18n: {
        locales: ["uz", "en", "ru"],
        defaultLocale: "en",
    },
    trailingSlash: true,
}

module.exports = withContentLayer.withContentlayer(nextConfig)
