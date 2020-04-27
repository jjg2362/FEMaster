const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js", //진입점
  output: {
    //
    path: __dirname + "/build",
    filename: "bundle.js",
  },
  module: {
    //파일을 읽을 때 작동하는 것,
    rules: [
      //파일을 읽을 때 규칙들
      {
        //정규표현식, i는 모든 문자열에 대해 중복되더라도 읽겠다
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  plugins: [
    //파일을 읽기 전에 실행
    new HtmlWebpackPlugin({
      template: "./public/index.html", //이 기준으로 HTML plugin 설정
    }),
  ],
};
