import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: true, serverActions: true },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx']
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
