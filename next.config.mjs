/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactCompiler: true,
  images: {
    unoptimized: true, // required for static export
  },
  // Optimize fonts to reduce render blocking
  optimizeFonts: true,
  // Enable SWC minification for smaller bundles
  swcMinify: true,
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
