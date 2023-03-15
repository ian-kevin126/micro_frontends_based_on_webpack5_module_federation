const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8083,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env", // 将高级语法转译至 ES5
            "@babel/preset-react", // 编译react语法至 ES5
          ],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "microFrontEnd3",
      filename: "remoteEntry.js",
      exposes: {
        "./MicroFrontEnd3Index": "./src/index",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
