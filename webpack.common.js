const path = require("path");
const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");
const {
  FaviconsBundlerPlugin,
} = require("html-bundler-webpack-plugin/plugins");

module.exports = {
  mode: "production",
  stats: { children: true },
  output: {
    path: path.join(__dirname, "dist/"),
    clean: true,
    environment: {
      // See babel documentation: https://github.com/babel/babel-loader
      arrowFunction: false,
    },
    // crossOriginLoading: "anonymous", // required for subresource integrity to work See: https://dev.to/webdiscus/webpack-auto-generate-an-integrity-hash-for-link-and-script-tags-in-an-html-template-48p5
  },
  resolve: {
    alias: {
      "@scripts": path.join(__dirname, "src/js"),
      "@styles": path.join(__dirname, "src/styles"),
      "@images": path.join(__dirname, "src/assets/imgs"),
    },
  },

  plugins: [
    new HtmlBundlerPlugin({
      entry: {
        index: {
          import: path.join(__dirname, "./src/views/template.ejs"),
          data: {
            title: "Bosco Images: Homepage",
          },
        },
        galleries: {
          import: "./src/views/galleries.ejs",
          data: { title: "Bosco Images: Photo Galleries" },
        },
        "birds-gallery": {
          import: "./src/views/birds-gallery.ejs",
          data: { title: "Bosco Images: Birds Gallery" },
        },
        "insects-gallery": {
          import: "./src/views/insects-gallery.ejs",
          data: {
            title: "Bosco Images: Insects Gallery",
          },
        },
        "small-animals-gallery": {
          import: "./src/views/small-animals-gallery.ejs",
          data: {
            title: "Bosco Images: Small Animals Gallery",
          },
        },
        "pond-life-gallery": {
          import: "./src/views/pond-life-gallery.ejs",
          data: {
            title: "Bosco Images: Pond Life Gallery",
          },
        },
        "urban-animals-gallery": {
          import: "./src/views/urban-animals-gallery.ejs",
          data: {
            title: "Bosco Images: Urban Animals Gallery",
          },
        },
        about: {
          import: "./src/views/about.ejs",
          data: { title: "About: Bosco Images" },
        },
        contact: {
          import: "./src/views/contact.ejs",
          data: { title: "Contact: Bosco Images" },
        },
      },

      js: {
        // output filename for JS
        filename: "js/[name].[contenthash:8].js",
      },
      css: {
        // output filename for CSS
        filename: "styles/[name].[contenthash:8].css",
      },
      //integrity: "auto", // include `integrity` attribute in production mode only

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
        test: /\.(png|jpe?g|avif|svg|)$/,
        type: "asset/resource",
        generator: {
          filename: ({ filename }) => {
            // Keep directory structure for images in dist folder
            const srcPath =
              "src/assets/imgs" ||
              "src/assets/imgs/about-page" ||
              "src/assets/imgs/birds-gal/avif" ||
              "src/assets/imgs/birds-gal/jpg" ||
              "src/assets/imgs/home-imgs" ||
              "src/assets/imgs/icons" ||
              "src/assets/imgs/insects-gal/avif" ||
              "src/assets/imgs/insects-gal/jpg" ||
              "src/assets/imgs/pond-gallery/avif" ||
              "src/assets/imgs/pong-gallery/jpg" ||
              "src/assets/imgs/small-animals-gal/avif" ||
              "src/assets/imgs/small-animals-gal/jpg" ||
              "src/assets/imgs/thumbnails/avif" ||
              "src/assets/imgs/thumbnails/jpg" ||
              "src/assets/imgs/urban/avif" ||
              "src/assets/imgs/urban/jpg";
            const regExp = new RegExp(
              `[\\\\/]?(?:${path.normalize(srcPath)}|node_modules)[\\\\/](.+?)$`,
            );
            const assetPath = path.dirname(
              regExp.exec(filename)[1].replace("@", "").replace(/\\/g, "/"),
            );

            return `imgs/${assetPath}/[name].[contenthash:8][ext]`;
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
