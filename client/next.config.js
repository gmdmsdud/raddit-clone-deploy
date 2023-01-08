/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false,
  },

  images: {
    domains: ["www.gravatar.com", "localhost","http://ec2-13-113-44-65.ap-northeast-1.compute.amazonaws.com"]
  }
}

module.exports = nextConfig
