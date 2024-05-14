const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  stats: { children: true },
  mode: "development",
  entry: [
    "./src/index.js",
    "./src/photoSlider.js",
    "./src/variables.js",
    "./src/dropDown.js",
    "./src/navStyles.js",
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Jenn Guneratne Photography: Homepage",
      filename: "index.html",
      template: "src/template.ejs",
      inject: "body",
      scriptloading: ["module"],
    }),
    new HtmlWebpackPlugin({
      title: "Photo Galleries",
      filename: "galleries.html",
      template: "src/galleries.ejs",
      inject: "body",
      scriptloading: ["module"],
    }),
    new HtmlWebpackPlugin({
      title: "Jenn Guneratne Photography: Birds Gallery",
      filename: "birds-gallery.html",
      template: "src/birds-gallery.ejs",
      inject: "body",
      scriptloading: ["module"],
    }),
    new HtmlWebpackPlugin({
      title: "Jenn Guneratne Photography: Insects Gallery",
      filename: "insects-gallery.html",
      template: "src/insects-gallery.ejs",
      inject: "body",
      scriptloading: ["module"],
    }),
    new HtmlWebpackPlugin({
      title: "Jenn Guneratne Photography: Small Animals Gallery",
      filename: "small-animals-gallery.html",
      template: "src/small-animals-gallery.ejs",
      inject: "body",
      scriptloading: ["module"],
    }),
    new HtmlWebpackPlugin({
      title: "About: Jenn Guneratne Photography",
      filename: "about.html",
      template: "src/about.ejs",
      inject: "body",
      scriptloading: ["module"],
    }),
    new HtmlWebpackPlugin({
      title: "Contact: Jenn Guneratne Photography",
      filename: "contact.html",
      template: "src/contact.ejs",
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
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
};
