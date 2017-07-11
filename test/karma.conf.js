module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: ['../node_modules/babel-polyfill/dist/polyfill.js', 'specs/**/*.ts'],
    exclude: [],
    preprocessors: {
      'specs/**/*.ts': ['webpack']
    },
    webpack: {

      resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
        alias: {
          'vue$': 'vue/dist/vue.common.js'
        }
      },

      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader?presets[]=es2015&plugins[]=transform-decorators-legacy', exclude: /node_modules/ },
          { test: /\.ts(x?)$/, loader: 'babel-loader?presets[]=es2015&plugins[]=transform-decorators-legacy!ts-loader' },
          { test: /\.html$/, loader: 'html-loader' },
          { test: /\.json$/, loader: 'json-loader' },
          { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
          { test: /\.css$/, loader: 'style-loader/url!file-loader?name=assets/[name].[ext]' },
          { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader?name=assets/[name].[ext]' }
        ]
      },

      devtool: 'source-map'

    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}