/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 120,
};

module.exports = (phase, defaultConfig) => {
  return withBundleAnalyzer(defaultConfig);
};
