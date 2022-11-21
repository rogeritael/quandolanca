/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

module.exports = {
  images: {
    domains: ['http://localhost:5000'],
  },
};
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'http',
//         hostname: 'localhost',
//         port: '5000',
//         pathname: '/src/public/images/**',
//       },
//     ],
//   },
// }

module.exports = nextConfig
