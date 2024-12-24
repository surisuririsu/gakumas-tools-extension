const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    reader: path.join(__dirname, "src", "reader"),
    background: path.join(__dirname, "src", "background"),
    sidePanel: path.join(__dirname, "src", "sidePanel"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: ["manifest.json", "public"],
    }),
    new HtmlWebpackPlugin({
      filename: "side_panel.html",
      chunks: ["sidePanel"],
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
