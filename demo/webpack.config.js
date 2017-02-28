var path = require('path')
var webpack = require('webpack')
var outputPath = path.resolve(__dirname, '../demo/dist')
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {

  context: path.resolve(__dirname, '../demo'),

  entry: {
    bundle: ['./src/index.ts'],
    vendor: ['vue', 'vue-router', 'vue-typed', 'moment', 'lodash', 'autonumeric', 'js-beautify', 'sweetalert2', 'toastr']
  },

  output: {
    // output to './demo/dist' folder 
    path: outputPath,
    // // with filename
    filename: '[name].js'

  },

  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js', '.css', '.json'],
    // modulesDirectories: ['node_modules', 'bower_components'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },

  // resolveLoader: {
  //   fallback: [path.join(__dirname, '../node_modules')]
  // },

  module: {
    loaders: [
      { test: /\.ts(x?)$/, loader: 'ts-loader' },
      { test: /\.js$/, loader: 'source-map-loader' },
      { test: /\.pug$/, loader: 'pug-loader' },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.css$/, loader: 'style-loader/url!file-loader?name=assets/[name].[ext]' },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader?name=assets/[name].[ext]' }
    ]
  },

  externals: {
    // require("jquery") is external and available
    //  on the global var jQuery
    //  THIS IS IMPORTANT, OR '$' WILL NOT INJECTED WITH SEMANTIC-UI
    //  BECAUSE YOU ARE USING YOUR OWN COMPILED JQUERY 
    'jquery': 'jQuery',
    'prismjs': 'Prism'
  },

  plugins: [
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),

    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]

}