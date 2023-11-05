/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.visa.com.ec',
        port: '',
        pathname: '',
      },
    ],
  },
}

module.exports = nextConfig
