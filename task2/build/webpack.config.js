const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src');
  entry: './index.js',

  output: {
    filename: 'app.bundle.js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },

  mode: 'development',
  devtoll: 'source-map',
  watch: true
}