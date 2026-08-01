/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactCompiler: true,
  images: {
    unoptimized: true, // required for static export
  },
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
