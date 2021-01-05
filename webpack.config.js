const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const CopyPlugin = require("copy-webpack-plugin");

const Assets = require("./src/assets.js");

module.exports = {
  mode: "development",
  entry: "./src/main.js",

  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),

    new CopyPlugin({
      patterns: Assets.map((asset) => {
        return {
          from: path.resolve("./", `./node_modules/${asset}`),
          to: path.resolve("./", "libs"),
        };
      }),
    }),
  ],

  devServer: {
    historyApiFallback: true,
    contentBase: "./",
    port: 5000,
  },
};
