import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'conteudo.imguol.com.br'
      },
      {
        protocol: 'https',
        hostname: 's2-home-globo.glbimg.com'
      },
      {
        protocol: 'https',
        hostname: '**.uol.com.br',
      },
      {
        protocol: 'https',
        hostname: '**.globo.com',
      }
    ]
  }
};

export default nextConfig;
