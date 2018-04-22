const baseConfig = require('./webpack.base.config');

const devConfig = {
  devServer: {
    open: true,
    hot: true,
    historyApiFallback: true,
  },

  mode: 'development',
  devtool: 'source-map',
  watch: true,
};

module.exports = Object.assign({}, baseConfig, devConfig);
