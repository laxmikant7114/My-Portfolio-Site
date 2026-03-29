/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
}

export default nextConfig
