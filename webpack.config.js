const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    background: path.join(__dirname, "src", "background.js"),
    sidepanel: path.join(__dirname, "src", "sidepanel.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "manifest.json", to: "./manifest.json" },
        { from: "public/img", to: "./img" },
      ],
    }),
    new HtmlWebpackPlugin({
      filename: "sidepanel.html",
      chunks: ["sidepanel"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
