const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [path.join(__dirname, 'src')],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /normalize\.scss$/,
        // include: path.join(__dirname, 'node_modules/normalize.css'),
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      // {
      //   test: /\.css$/,
      //   include: path.join(__dirname, 'node_modules/normalize.css'),
      //   use: ExtractTextPlugin.extract(['css-loader'])
      // }
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename: '[name].scss'})
  ]
};