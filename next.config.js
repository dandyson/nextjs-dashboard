/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export configuration to support API routes
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 