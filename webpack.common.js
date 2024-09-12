const path = require("path");
const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");

module.exports = {
  stats: { children: true },
  output: {
    path: path.join(__dirname, "dist/"),
    clean: true,
    environment: {
      // See babel documentation: https://github.com/babel/babel-loader
      arrowFunction: false,
    },
    crossOriginLoading: "anonymous", // required for subresource integrity to work See: https://dev.to/webdiscus/webpack-auto-generate-an-integrity-hash-for-link-and-script-tags-in-an-html-template-48p5
  },
  resolve: {
    alias: {
      "@scripts": path.join(__dirname, "src/js"),
      "@styles": path.join(__dirname, "src/css"),
      "@images": path.join(__dirname, "src/images"),
    },
  },

  plugins: [
    new HtmlBundlerPlugin({
      entry: [
        {
          import: "./src/views/template.ejs", // template file
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
      integrity: "auto", // include `integrity` attribute in production mode only

      preprocessor: "ejs",
      preprocessorOptions: {
        async: false, // defaults 'false'
        // defaults process.cwd(), root path for includes with an absolute path (e.g., /file.html)
        root: path.join(__dirname, "src/views"), // defaults process.cwd()
        // defaults [], an array of paths to use when resolving includes with relative paths
        views: [
          "src/partials", // relative path
          path.join(__dirname, "src/partials"), // absolute path
        ],
      },
    }),
  ],

  module: {
    rules: [
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
              `[\\\\/]?(?:${path.normalize(srcPath)}|node_modules)[\\\\/](.+?)$`,
            );
            const assetPath = path.dirname(
              regExp.exec(filename)[1].replace("@", "").replace(/\\/g, "/"),
            );

            return `images/${assetPath}/[name].[contenthash:8][ext]`;
          },
        },
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: [
          /node_modules/,
          /node_modules[\\/]core-js/,
          /node_modules[\\/]webpack[\\/]buildin/,
        ],
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
