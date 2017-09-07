const path = require('path');
const webpack = require('webpack');

const APP_DIR = path.resolve(__dirname, 'client/src/');
const BUILD_DIR = path.resolve(__dirname, 'client/public/')

module.exports =  {
  entry: `${APP_DIR}/index.jsx`,
  devtool: 'cheap-eval-source-map',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
}