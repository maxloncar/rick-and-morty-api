/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["rickandmortyapi.com"],
    formats: ["image/webp", "image/avif"],
  },

  publicRuntimeConfig: {
    api: "https://rickandmortyapi.com/api/character/",
  },
};

module.exports = nextConfig;
