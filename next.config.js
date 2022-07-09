/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "cdn.worldvectorlogo.com"],
    loader: "akamai",
    path: "",
  },
  // basePath: "/portfolio-v2",
  // assetPrefix: "/portfolio-v2",
};

module.exports = nextConfig;
