var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.config')
var FriendlyErrors = require('friendly-errors-webpack-plugin')

// add hot-reload to app bundle
baseWebpackConfig.entry.bundle = ['./dev-client'].concat(baseWebpackConfig.entry.bundle)

module.exports = merge(baseWebpackConfig, {
  module: {
    // loaders: utils.styleLoaders({ sourceMap: false })
    loaders: [{ test: /\.ts(x?)$/, loader: 'ts-loader' }]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  // https://webpack.github.io/docs/build-performance.html#sourcemaps
  devtool: '#eval-cheap-module-source-map',
  // devtool: '#inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new FriendlyErrors(),

    // https: //webpack.js.org/plugins/commons-chunk-plugin/
    new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ 'vendor', /* filename= */ 'vendor.bundle.js')
  ]
})