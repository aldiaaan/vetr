const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

console.log(process.env)

module.exports = {
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "public/index.html"),
      minify: {
        removeComments: false
      }
    }),
    
  ],

  entry: {
    app: path.join(__dirname, "src/index.tsx"),
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@vetr/mangadex": path.resolve(
        __dirname,
        "../../packages/vetr-mangadex/src"
      ),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: (module) => {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `vendors.${packageName.replace("@", "")}`;
          },
        },
      },
    },
    runtimeChunk: {
      name: "runtime",
    },
  },

  module: {
    rules: [
      {
        test: /\.svg$/i,
        type: "asset/resource",
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
        },
      },
    ],
  },
};
