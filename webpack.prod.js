const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = [
  merge(common, {
    entry: {
      listUi: path.resolve(__dirname, "src/js/listUis/listUi.js"),
    },
    // 웹팩 빌드를 시작할 때 dist폴더를 비우도록 설정i
    plugins: [new CleanWebpackPlugin()],
    optimization: {
      minimize: false,
    },
  }),
  merge(common, {
    entry: {
      "listUi.min": path.resolve(__dirname, "src/js/listUis/listUi.js"),
    },
    optimization: {
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
  }),
];
