const withSourceMaps = require('@zeit/next-source-maps');
const withSass = require('@zeit/next-sass');
module.exports = withSass(
  withSourceMaps({
    webpack(config, options) {
      return config;
    },
  }),
);
