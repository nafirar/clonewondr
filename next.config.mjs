/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wondr.bni.co.id",
      },
    ],
  },
};

export default nextConfig;
