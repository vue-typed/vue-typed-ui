var path = require('path')
var webpack = require('webpack')
var outputPath = path.resolve(__dirname, '../demo/dist')

var config = {
  context: path.resolve(__dirname, '../demo'),

  output: {
    // output to './demo/dist' folder 
    path: outputPath,
    // // with filename
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.css', '.json'],
    modulesDirectories: ['node_modules', 'bower_components'],
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'source-map-loader' },
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
    'jquery': 'jQuery'
  }

}

if (process.env.NODE_ENV === 'production') {
  config.entry = { 'bundle': ['./src/index.prod.ts']  }
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
  config.entry = { 'bundle': ['./src/index.dev.ts']  }
  config.module.loaders = config.module.loaders.concat([
    { test: /\.ts(x?)$/, loader: 'ts-loader' }
  ])
  config.devtool = '#inline-source-map'
}

module.exports = config
