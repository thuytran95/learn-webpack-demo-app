const path = require("path");
const common = require("./webpack.common");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new CleanWebpackPlugin()],
});
