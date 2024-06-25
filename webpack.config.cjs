const path = require("path");

module.exports = {
  mode: "development",
  entry: "./public/assets/scripts/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  devtool: "eval-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    hot: true,
    client: {
      overlay: true,
    },
    port: 3000,
  },
};
