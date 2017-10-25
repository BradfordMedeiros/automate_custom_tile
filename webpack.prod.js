const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'common.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    new webpack.NoErrorsPlugin(),
  ],
};
