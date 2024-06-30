const path = require("path");
const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");
const ejs = require("ejs");

// create EJS config
const ejsConfig = {
  root: process.cwd(), // define root template path when using `include()`
  async: true, // optional, async rendering
};

module.exports = {
  stats: { children: true },
  mode: "development",
  output: {
    path: path.join(__dirname, "dist/"),
    clean: true,
  },
  resolve: {
    alias: {
      "@scripts": path.join(__dirname, "src/js"),
      "@styles": path.join(__dirname, "src/css"),
      "@images": path.join(__dirname, "src/images"),
    },
  },

  devtool: "inline-source-map",

  plugins: [
    new HtmlBundlerPlugin({
      entry: [
        {
          import: "./src/pages/template.ejs", // template file
          filename: "index.html", // => dist/index.html
          data: { title: "Bosco Images Wildlife Photography: Homepage" }, // pass variables into template
        },
        {
          import: "./src/pages/galleries.ejs",
          filename: "galleries.html",
          data: { title: "Bosco Images Wildlife Photography: Photo Galleries" },
        },
        {
          import: "./src/pages/birds-gallery.ejs",
          filename: "birds-gallery.html",
          data: { title: "Bosco Images Wildlife Photography: Birds Gallery" },
        },
        {
          import: "./src/pages/insects-gallery.ejs",
          filename: "insects-gallery.html",
          data: {
            title: "Bosco Images Wildlife Photography: Insects Gallery",
          },
        },
        {
          import: "./src/pages/small-animals-gallery.ejs",
          filename: "small-animals-gallery.html",
          data: {
            title: "Bosco Images Wildlife Photography: Small Animals Gallery",
          },
        },
        {
          import: "./src/pages/about.ejs",
          filename: "about.html",
          data: { title: "About: Bosco Images Wildlife Photography" },
        },
        {
          import: "./src/pages/contact.ejs",
          filename: "contact.html",
          data: { title: "Contact: Bosco Images Wildlife Photography" },
        },
      ],
      js: {
        // output filename for JS
        filename: "js/[name].[contenthash:8].js",
      },
      css: {
        // output filename for CSS
        filename: "css/[name].[contenthash:8].css",
      },
      preprocessor: "ejs",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(html|ejs)$/,
        loader: HtmlBundlerPlugin.loader,
        options: {
          preprocessor: (template, { data }) =>
            ejs.render(template, data, ejsConfig), // <= use EJS compiler
        },
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: "css-loader",
            options: {
              import: false, // disable @import at-rules handling
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|ico|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/imgs/[name].[hash:8][ext]",
        },
      },
    ],
  },

  //enable HMR with live reload
  devServer: {
    static: path.resolve(__dirname, "dist"),
    watchFiles: {
      paths: ["src/**/*.*"],
      options: {
        usePolling: true,
      },
    },
  },
};
