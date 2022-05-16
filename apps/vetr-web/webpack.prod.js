const TerserJSPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require("webpack");
const zlib = require("zlib");
const path = require("path");

module.exports = {
  output: {
    filename: "static/js/[contenthash].js",
    chunkFilename: "static/js/[contenthash].chunk.js",
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    assetModuleFilename: "static/media/[contenthash][ext]",
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserJSPlugin()],
  },
  mode: "production",
  plugins: [
    new CompressionPlugin({
      filename: "[path][base].br",
      algorithm: "brotliCompress",
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      __DEV__: false,
    }),
    // new BundleAnalyzerPlugin(),
  ],
};
