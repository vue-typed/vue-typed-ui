var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.config')
var FaviconsWebpackPlugin = require('favicons-webpack-plugin')


module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: [
      { test: /\.ts(x?)$/, loader: 'babel?presets[]=es2015!ts' },
      { test: /\.js$/, loader: 'babel', query: { presets: ['es2015'] } }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.min.js'
    }
  },
  // devtool: '#source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    // https://github.com/jantimon/favicons-webpack-plugin
    new FaviconsWebpackPlugin({
      logo: './assets/favicon.png',
      prefix: 'fav-',
      title: 'VueTypedUI'
    })
  ]
})