
module.exports = {
  reactStrictMode: true,
  webpack: (config: { resolve: { fallback: { fs: any; }; }; }) => {
    config.resolve.fallback = { fs: 
    false };
    return config;
  }
}