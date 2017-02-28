var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.config')
var FriendlyErrors = require('friendly-errors-webpack-plugin')

// add hot-reload to app bundle
baseWebpackConfig.entry.bundle = ['./dev-client'].concat(baseWebpackConfig.entry.bundle)

module.exports = merge(baseWebpackConfig, {
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  // https://webpack.github.io/docs/build-performance.html#sourcemaps
  // devtool: '#eval-cheap-module-source-map',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrors(),

    // https: //webpack.js.org/plugins/commons-chunk-plugin/
    new webpack.optimize.CommonsChunkPlugin({ /* chunkName= */ name: 'vendor', /* filename= */ filename: 'vendor.bundle.js' })
  ]
})