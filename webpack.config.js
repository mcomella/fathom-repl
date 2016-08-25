'use strict';
const webpack = require('webpack');
module.exports = {
  entry: ['./expose-fathom.js'],
  output: {
    path: './public/dist',
    filename: 'fathom.js'
  }
}
