import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pure static export -> upload the generated `out/` CONTENTS to the
  // subdomain docroot (taste.codehubb.com). No Node server needed.
  output: "export",
  // No basePath: this deploys at the subdomain ROOT, so all asset + link
  // URLs are root-absolute (/_next/...).
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
