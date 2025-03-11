import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.WORDPRESS_HOSTNAME || "", // Ensure this variable is defined
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "heidydelacruz.com",
        port: "",
        pathname: "/**", // Ensure pathname is included
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: `${process.env.WORDPRESS_URL}/wp-admin`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
