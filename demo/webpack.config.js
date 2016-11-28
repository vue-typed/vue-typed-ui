var path = require('path')
var webpack = require('webpack')

var config = {

  target: "web",

  context: path.resolve(__dirname, '../demo'),

  entry: './src/index.ts',

  output: {
    // output to './demo/dist' folder 
    path:  path.resolve(__dirname, '../demo/dist'),//'./demo/dist',

    // with filename
    filename: 'bundle.js',

    // mark /dist/ folder as a public path so index.html can reach it
    publicPath: '/dist/'
  },

  

  devtool: "#inline-source-map",

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.css', '.json'],
    modulesDirectories: ["node_modules", "bower_components"],
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'source-map-loader' },
      { test: /\.html$/, loader: 'html' },
      { test: /\.json$/, loader: 'json' },
    ]
  },

  externals: {
    // require("jquery") is external and available
    //  on the global var jQuery
    //  THIS IS IMPORTANT, OR '$' WILL NOT INJECTED WITH SEMANTIC-UI
    //  BECAUSE YOU ARE USING YOUR OWN COMPILED JQUERY 
    'jquery': 'jQuery'
  }

}

if (process.env.NODE_ENV === 'production') {
  
  // still need babel for production stage since uglifyJs not support es6
  config.module.loaders = (config.module.loaders || []).concat([
    { test: /\.ts(x?)$/, loader: 'babel?presets[]=es2015!ts' },
    { test: /\.js$/, loader: 'babel', query: { presets: ['es2015'] } }
  ])

  config.devtool = '#source-map'

  // https://vuejs.org/guide/deployment.html
  config.plugins = (config.plugins || []).concat([
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
    new webpack.optimize.OccurenceOrderPlugin()
  ])
} else {
  config.module.loaders = config.module.loaders.concat([
    { test: /\.ts(x?)$/, loader: 'ts' }
  ])

  // webpack-dev-server config, see: https://webpack.github.io/docs/webpack-dev-server.html
  config.devServer = {
    contentBase: './demo',
    hot: true,
    inline: true,
    port: 3030
  }

  config.plugins = [
    // HMR issue, see: https://github.com/webpack/webpack/issues/1151
    new webpack.HotModuleReplacementPlugin()
  ]
}


module.exports = config