// This file is not transpiled using babel
const express = require('express');

const app = express();

const webpackDevMiddleware = require('webpack-dev-middleware-webpack-2');
const webpack = require('webpack');
const middlewareOptions = {
  stats: {colors: true},
  noInfo: true,
};
app.use(webpackDevMiddleware(webpack(require('./webpack.dev.config')), middlewareOptions));

const lessMiddleware = require('less-middleware');
app.use('/styles', lessMiddleware('./public/styles'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

const port = parseInt(process.env.PORT || 3000, 10);

app.listen(port, () => {
  const url = `http://localhost:${port}`;
  console.log(`Listening at ${url}`); // eslint-disable-line no-console
});
