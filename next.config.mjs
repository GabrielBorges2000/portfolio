/** @type {import('next').NextConfig} */
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
};

export default nextConfig;
