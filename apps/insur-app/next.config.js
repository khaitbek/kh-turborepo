/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")(
    // This is the default (also the `src` folder is supported out of the box)
    "./i18n.ts"
)
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

module.exports = withNextIntl({
    ...nextConfig
})
