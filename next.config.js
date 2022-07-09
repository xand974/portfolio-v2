const env = process.env.NODE_ENV;
let basePath = "",
  assetPrefix = "";
if (env == "development") {
  basePath = assetPrefix = "";
} else {
  basePath = assetPrefix = "/portfolio-v2";
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "cdn.worldvectorlogo.com"],
    loader: "akamai",
    path: "",
  },
  basePath,
  assetPrefix,
};

module.exports = nextConfig;
