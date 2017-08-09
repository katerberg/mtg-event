const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    './public/scripts/main',
  ],
  module: {
    rules: [
      {test: /.jsx?$/, use: [{loader: 'babel-loader'}], exclude: /node_modules/},
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          fix: true,
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public/scripts/`,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.IgnorePlugin(/regenerator|nodent|js-beautify/, /ajv/),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      dead_code: true, // eslint-disable-line camelcase
      minimize: true,
    }),
    'mocha',
  ],
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx',
    ],
  },
};
