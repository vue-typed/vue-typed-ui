var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.config')
var FaviconsWebpackPlugin = require('favicons-webpack-plugin')


module.exports = merge(baseWebpackConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // https://github.com/jantimon/favicons-webpack-plugin
    new FaviconsWebpackPlugin({
      logo: './assets/favicon.png',
      prefix: 'fav-',
      title: 'VueTypedUI'
    })
  ]
})