module.exports = {
  images: {
    domains: ["assets.coingecko.com", "dummyimage.com", "cdn.sanity.io"],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config;
  },
};
