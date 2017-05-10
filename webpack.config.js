const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};
const ExtractNormalizeCSSPlugin = new ExtractTextPlugin({filename: 'normalize.scss'});

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
        include: path.join(__dirname, 'node_modules/normalize.css'),
        use: ExtractNormalizeCSSPlugin.extract(['css-loader'])
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    ExtractNormalizeCSSPlugin
  ]
};