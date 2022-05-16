const CleanTerminalPlugin = require("clean-terminal-webpack-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const webpack = require('webpack');
const path = require("path");

module.exports = {
  output: {
    filename: "static/js/[name].js",
    chunkFilename: "static/js/[name].chunk.js",
    assetModuleFilename: "static/media/[hash][ext]",
    path: path.join(__dirname, "dist"),
    publicPath: "/",
  },
  mode: "development",
  devtool: "cheap-module-source-map",
  plugins: [
    new CleanTerminalPlugin({
      beforeCompile: true,
    }),
    // waiting for this issue to be resolved https://github.com/gregberge/error-overlay-webpack-plugin/issues/83
    new ErrorOverlayPlugin(),
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
  ],
  devServer: {
    client: {
      overlay: true,
    },
    historyApiFallback: true,
    port: 8080,
    hot: true,
  },
};
