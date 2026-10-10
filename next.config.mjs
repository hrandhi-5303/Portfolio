import createMDX from "@next/mdx";
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: true },
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
};
export default createMDX({ extension: /\.mdx?$/ })(nextConfig);
