const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[hash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  mode: 'none',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 3002
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Virtual Keyboard',
    filename: 'admin.html'
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};