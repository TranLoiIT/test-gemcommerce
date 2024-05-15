/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    eslint: {
      ignoreDuringBuilds: true,
    },
    // env: {
    //   API_URL: process.env.NEXT_PUBLIC_API_URL,
    // },
};

module.exports = nextConfig