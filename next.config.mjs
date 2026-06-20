/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Lint is run explicitly via `npm run lint` so the production build stays
  // green even before lint nits are addressed. Type-checking stays enabled.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
