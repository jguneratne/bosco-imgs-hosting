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
          import: ["./src/views/template.ejs"], // template file
          filename: "index.html", // => dist/index.html
          data: {
            title: "Bosco Images Wildlife Photography: Homepage",
          }, // pass variables into template
        },
        {
          import: "./src/views/galleries.ejs",
          filename: "galleries.html",
          data: { title: "Bosco Images Wildlife Photography: Photo Galleries" },
        },
        {
          import: "./src/views/birds-gallery.ejs",
          filename: "birds-gallery.html",
          data: { title: "Bosco Images Wildlife Photography: Birds Gallery" },
        },
        {
          import: "./src/views/insects-gallery.ejs",
          filename: "insects-gallery.html",
          data: {
            title: "Bosco Images Wildlife Photography: Insects Gallery",
          },
        },
        {
          import: "./src/views/small-animals-gallery.ejs",
          filename: "small-animals-gallery.html",
          data: {
            title: "Bosco Images Wildlife Photography: Small Animals Gallery",
          },
        },
        {
          import: "./src/views/about.ejs",
          filename: "about.html",
          data: { title: "About: Bosco Images Wildlife Photography" },
        },
        {
          import: "./src/views/contact.ejs",
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
      preprocessorOptions: {
        async: false, // defaults 'false'
        // defaults process.cwd(), root path for includes with an absolute path (e.g., /file.html)
        root: path.join(__dirname, "src/views"), // defaults process.cwd()
        // defaults [], an array of paths to use when resolving includes with relative paths
        views: [
          "src/views/partials", // relative path
          path.join(__dirname, "src/views/partials"), // absolute path
        ],
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(html|ejs)$/,
        loader: HtmlBundlerPlugin.loader,
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
          filename: ({ filename }) => {
            // Keep directory structure for images in dist folder
            const srcPath =
              "src/assets/imgs" ||
              "src/assets/imgs/about-page" ||
              "src/assets/imgs/birds-gal" ||
              "src/assets/imgs/home-imgs" ||
              "src/assets/imgs/insects-gal" ||
              "src/assets/imgs/small-animals-gal" ||
              "src/assets/imgs/thumbnails";
            const regExp = new RegExp(
              `[\\\\/]?(?:${path.normalize(srcPath)}|node_modules)[\\\\/](.+?)$`
            );
            const assetPath = path.dirname(
              regExp.exec(filename)[1].replace("@", "").replace(/\\/g, "/")
            );

            return `images/${assetPath}/[name].[hash:8][ext]`;
          },
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
