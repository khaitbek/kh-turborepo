/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    domains: ["static.vecteezy.com", "www.learnreligions.com", "muslim-page.netlify.app", "i.etsystatic.com"]
  }
}

module.exports = nextConfig
