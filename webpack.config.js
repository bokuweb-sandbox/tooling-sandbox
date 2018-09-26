const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const mode = (() => {
  const nEnv = process.env.NODE_ENV;
  switch (nEnv) {
    case "production":
    case "development":
      return nEnv;
    default:
      return "development";
  }
})();

const isDevMode = () => mode === DEV_MODE;

module.exports = {
  mode,
  entry: ["./src/index.tsx"],
  output: {
    path: `${__dirname}/dist`,
    filename: "[name].js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    historyApiFallback: true,
    disableHostCheck: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader"
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   inject: true,
    //   template: path.join(process.cwd(), "public", "index.html")
    // })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  }
};
