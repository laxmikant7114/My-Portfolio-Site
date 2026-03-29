/** @type {import('next').NextConfig} */
const repoName = "My-Portfolio-Site"; // 👈 define it FIRST
const isGHPages = process.env.DEPLOY_TARGET === "gh-pages";

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  output: "export",
  basePath: isGHPages ? `/${repoName}` : "",
  assetPrefix: isGHPages ? `/${repoName}/` : "",
}

export default nextConfig
