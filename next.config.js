/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";


const nextConfig = {
  images: {
    qualities: [25, 50, 75, 100],
    remotePatterns: [
      { hostname: "github.com" },
      { hostname: "avatars.githubusercontent.com" },
      { hostname: "source.unsplash.com" },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  transpilePackages: ["lucide-react"],
  typescript: {
    ignoreBuildErrors: true,
  },
  allowedDevOrigins: ['*.codeborges.com'],
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);