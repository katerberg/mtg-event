module.exports = Object.assign({}, require('./webpack.config'), {
  output: {
    path: '/',
    filename: './scripts/bundle.js',
  },
  devtool: 'cheap-module-inline-source-map',
  plugins: [],
});
