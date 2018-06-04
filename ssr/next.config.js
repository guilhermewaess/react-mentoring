const withSourceMaps = require('@zeit/next-source-maps');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
module.exports = withSass(
  withCSS(
    withSourceMaps({
      webpack(config, options) {
        return config;
      },
    }),
  ),
);
