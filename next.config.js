/** @type {import('next').NextConfig} */
const withPurgeCss = require("next-purgecss");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = (phase, defaultConfig) => {
  return withBundleAnalyzer(defaultConfig);
};

module.exports = withPurgeCss({
  purgeCssPaths: ["pages/**/*", "components/**/*", "layout/**/*"],
  images: {
    domains: ["cdn.schema.io"],
  },
  reactStrictMode: true,
  staticPageGenerationTimeout: 240,
});
