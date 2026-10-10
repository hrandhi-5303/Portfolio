import createMDX from "@next/mdx";
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/work/cloud-data-platform",
        destination: "/work/financial-data-reconciliation",
        permanent: true,
      },
    ];
  },
  experimental: { typedRoutes: true },
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
};
export default createMDX({ extension: /\.mdx?$/ })(nextConfig);
