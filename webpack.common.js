const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3.inject style into DOM
          "css-loader", //2. turn css into common js
          "sass-loader", // 1. turn sass into cs
        ],
      },
    ],
  },
};