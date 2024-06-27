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
    "./src/form-validation.js",
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Bosco Images Wildlife Photography: Homepage",
      filename: "index.html",
      template: "src/template.ejs",
      inject: "body",
      scriptLoading: ["module"],
    }),
    new HtmlWebpackPlugin({
      title: "Bosco Images Wildlife Photography: Photo Galleries",
      filename: "galleries.html",
      template: "src/galleries.ejs",
      inject: "body",
      scriptLoading: ["module"],
    }),
    new HtmlWebpackPlugin({
      title: "Bosco Images Wildlife Photography: Birds Gallery",
      filename: "birds-gallery.html",
      template: "src/birds-gallery.ejs",
      inject: "body",
      scriptLoading: ["module"],
    }),
    new HtmlWebpackPlugin({
      title: "Bosco Images Wildlife Photography: Insects Gallery",
      filename: "insects-gallery.html",
      template: "src/insects-gallery.ejs",
      inject: "body",
      scriptLoading: ["module"],
    }),
    new HtmlWebpackPlugin({
      title: "Jenn Guneratne Photography: Small Animals Gallery",
      filename: "small-animals-gallery.html",
      template: "src/small-animals-gallery.ejs",
      inject: "body",
      scriptLoading: ["module"],
    }),
    new HtmlWebpackPlugin({
      title: "About: Bosco Images Wildlife Photography",
      filename: "about.html",
      template: "src/about.ejs",
      inject: "body",
      scriptLoading: ["module"],
    }),
    new HtmlWebpackPlugin({
      title: "Contact: Bosco Images Wildlife Photography",
      filename: "contact.html",
      template: "src/contact.ejs",
      inject: "body",
      scriptLoading: ["module"],
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
