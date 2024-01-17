const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  stats: { children: true },
  mode: "development",
  entry: [
    "./src/index.js",
    "./src/photoSlider.js",
    "./src/querySelectors.js",
    "./src/dropDown.js",
    "./src/tabCtrl.js",
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Photo Gallery",
      filename: "index.html",
      template: "src/template.ejs",
      inject: "body",
      scriptloading: ["module"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "./assets/[name]-[hash][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: {
              root: path.resolve(__dirname, "src"),
            },
          },
        ],
      },
    ],
  },
};
