/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  emv:{
    stripe_prive: process.env.STRIPE_SECRET_KEY
  }
}

module.exports = nextConfig
