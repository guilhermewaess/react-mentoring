const baseConfig = require('./webpack.base.config');

const prodConfig = {
  mode: 'production',
  devtool: 'none',
};

module.exports = Object.assign({}, baseConfig, prodConfig);
