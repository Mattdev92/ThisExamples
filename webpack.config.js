const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/views/main/index.js',
    kontakt: './src/views/second/kontakt.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    watchContentBase: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/views/main/index.html',
      filename: 'index.html',
      chunk: ['index'],
      excludeChunks: ['kontakt'],
    }),
    new HtmlWebpackPlugin({
      template: './src/views/second/kontakt.html',
      filename: 'kontakt.html',
      chunk: ['kontakt'],
      excludeChunks: ['index'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] },
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.(html)$/,
        use: ['html-loader'],
      },
    ],
  },
};
