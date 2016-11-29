var WebpackDevServer = require('webpack-dev-server')
var webpack = require('webpack')
var config = require('./webpack.config.js')

config.entry.bundle.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server")
config.plugins = [
  new webpack.HotModuleReplacementPlugin({
    multiStep: true
  })
]
var compiler = webpack(config)

var server = new WebpackDevServer(compiler, {
  contentBase: './demo/dist',
  // filename: 'bundle.js',
  hot: true,
  // inline: true,
  publicPath: '/',  
  stats: {
  //   colors: true,
  //   hash: false,
  //   version: false,
  //   timings: false,
  //   assets: false,
    chunks: false,
  //   modules: false,
  //   reasons: false,
  //   children: false,
  //   source: false,
  //   errors: false,
  //   errorDetails: false,
  //   warnings: false,
  //   publicPath: false
  }
})

server.listen(8080, 'localhost', function () {})
