module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/../back/public",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  context: __dirname,
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-react", "@babel/env"],
        },
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader",
        },
      },
      {
        test: /.s[ac]ss$/i,
        use: [
          // Creates style nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },
  devtool: "source-map",
};
