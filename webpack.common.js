const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ 
      filename: 'index.html',
      template: './src/index.html' 
    }),
    new HtmlWebpackPlugin({ 
      filename: 'kart.html',
      template: './src/kart.html' 
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/images", to: "images"},
        { from: "./src/data", to: "data"},
      ],
    }),
  ],
};