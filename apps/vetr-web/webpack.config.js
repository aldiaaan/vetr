const WebpackMerge = require("webpack-merge");
const WebpackCommon = require("./webpack.common.js");

module.exports = ({ env }) => {
  let environment = env;

  if (!["prod", "dev"].includes(env)) {
    console.warn(
      `Unnsupported environment '${environment}', env will fallback to 'dev'`
    );
    environment = "dev";
  }
  const WebpackConfig = require(`./webpack.${environment}.js`);
  const mergedConfig = WebpackMerge.merge(WebpackCommon, WebpackConfig);
  console.log(mergedConfig);
  return mergedConfig;
};
