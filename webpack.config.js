const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const NODE_ENV = process.env.NODE_ENV;
const isProduction = NODE_ENV === "production" || false;
const isDevelopment = NODE_ENV === "development" || false;

module.exports = {
  entry: "./src/index.ts",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][hash].js",
  },

  devtool: isDevelopment && "inline-source-map",
  stats: isDevelopment ? "minimal" : "normal",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./src/style.scss",
            },
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: isDevelopment,
              modules: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: isDevelopment,
              config: { path: "./postcss.config.js" },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },

      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: path.resolve(__dirname, "./src/assets/images"),
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: "/assets/fonts/",
              outputPath: "assets/fonts/",
              esModule: false,
            },
          },
        ],
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        exclude: path.resolve(__dirname, "./src/assets/fonts"),
        use: [
          {
            loader: "file-loader",
            options: {
              name: isDevelopment ? "[name].[ext]" : "[contenthash].[ext]",
              publicPath: "assets/images",
              outputPath: "assets/images",
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name][hash].css",
      chunkFilename: "[id].css",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
