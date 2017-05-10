const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  entry: [PATHS.src],
  output: {
    path: PATHS.dist,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};