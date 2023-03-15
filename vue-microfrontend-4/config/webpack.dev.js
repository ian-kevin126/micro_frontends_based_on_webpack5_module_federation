const { merge } = require("webpack-merge"); // this is used to be able to merge webpack.common.js with this file
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8084/",
  },
  devServer: {
    port: 8084,
    historyApiFallback: {
      index: "/index.html",
    },
    headers: {
      "Access-Control-AllowOrigin": "*",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "microFrontEnd4",
      filename: "remoteEntry.js",
      exposes: {
        "./MicroFrontEnd4Index": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig); // devConfig will override anything that we have set in commonConfig if they set the same thing
