const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const parentDir = path.join(__dirname, '../');

module.exports = {
  entry: path.join(parentDir, '/src/index.js'),

  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.sass$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf)$/,
        loader: 'url-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(parentDir, '/src/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  output: {
    path: parentDir + '/dist',
    filename: 'app-bundle.js',
  },
};
