const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = [{
  mode: 'production',
  entry: {
    "listUi.min": [path.resolve(__dirname, 'src/js/listUi.js'), "./src/assets/sass/main.scss"]
  },
  // 빌드한 파일이 저장되는 곳
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/, // 모듈폴더제외
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    // MiniCssExtractPlugin 플러그인 설정
    // [name]은 entry에서 설정한 "listUi"를 의미
    new MiniCssExtractPlugin({
      filename: "[name].css",
    })
  ],
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({}),
    ]
  }
},{
  mode: 'production',
  entry: {
    "listUi": [path.resolve(__dirname, 'src/js/listUi.js'),"./src/assets/sass/main.scss"],
  },
  // 빌드한 파일이 저장되는 곳
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/, // 모듈폴더제외
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    // MiniCssExtractPlugin 플러그인 설정
    // [name]은 entry에서 설정한 "listUi"를 의미
    new MiniCssExtractPlugin({
      filename: "[name].css",
    })
  ],
  optimization: {
    minimize: false,
  }
}]
