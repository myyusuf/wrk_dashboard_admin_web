var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  // output: { path: __dirname, filename: 'bundle.js' },
  output: { path: '/Users/myyusuf/Documents/Projects/wika_rekon/dashboard/software/server_admin/public/app/', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
};
