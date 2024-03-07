const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  stats: { children: true },
  mode: "development",
  entry: [
    "./src/index.js",
    // "./src/photoSlider.js",
    "./src/querySelectors.js",
    // "./src/dropDown.js",
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
      title: "Home: Photo Gallery",
      filename: "index.html",
      template: "src/template.ejs",
      inject: "body",
      scriptloading: ["module"],
    }),
    new HtmlWebpackPlugin({
      title: "Wildlife Gallery",
      filename: "first-gallery.html",
      template: "src/first-gallery.ejs",
      inject: "body",
      scriptloading: ["module"],
    }),
    new HtmlWebpackPlugin({
      title: "Insect Gallery",
      filename: "second-gallery.html",
      template: "src/second-gallery.ejs",
      inject: "body",
      scriptloading: ["module"],
    }),
    new HtmlWebpackPlugin({
      title: "About",
      filename: "about.html",
      template: "src/about.ejs",
      inject: "body",
      scriptloading: ["module"],
    }),
    new HtmlWebpackPlugin({
      title: "Contact",
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
