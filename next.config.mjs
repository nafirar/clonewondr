import withNextIntl from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wondr.bni.co.id",
        pathname: "/assets/images/**",
      },
    ],
  },
};

export default withNextIntl()(nextConfig);
