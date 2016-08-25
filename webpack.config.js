'use strict';
const webpack = require('webpack');
module.exports = {
  entry: ['./expose-fathom.js'],
  output: {
    path: './public/dist',
    filename: 'fathom.js'
  }

  /*
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: /js/,
      query: {
        presets: ['es2015'],
      }
    }]
  }
  */
}
