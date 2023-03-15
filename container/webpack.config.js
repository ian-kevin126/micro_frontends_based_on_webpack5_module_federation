const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      filename: "remoteEntry.js",
      remotes: {
        microFrontEnd1: "microFrontEnd1@http://localhost:8081/remoteEntry.js",
        microFrontEnd2: "microFrontEnd2@http://localhost:8082/remoteEntry.js",
        microFrontEnd3: "microFrontEnd3@http://localhost:8083/remoteEntry.js",
        microFrontEnd4: "microFrontEnd4@http://localhost:8084/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
