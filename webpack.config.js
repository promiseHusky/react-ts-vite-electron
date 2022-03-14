const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  target: 'electron-main',
  entry: './electron/main.js',
  output: { path: path.resolve(__dirname, './build'), filename: 'main.js' },
  node: {
    __dirname: false,
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: './electron/assets/logo.ico', to: './' }],
    }),
  ],
};
