const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { ProvidePlugin } = require('webpack')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        type: 'javascript/auto',
        test: /\.(png|jpg|jpeg|gif|json|ttf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              webpackImporter: false,
              sassOptions: {
                includePaths: ['node_modules', 'src'],
              },
            }
          }],
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
            },
          },
          'file-loader'
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new Dotenv(),
    new ProvidePlugin({
      "React": "react",
    }),
    new NodePolyfillPlugin()
  ],
};