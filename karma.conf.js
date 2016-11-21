module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: ['test/index.js'],
    exclude: [],
    preprocessors: {
      'test/index.js': ['webpack']
    },
    webpack: {
      resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
        alias: {
          'vue$': 'vue/dist/vue.js'
        }
      },

      module: {
        loaders: [
          { test: /\.html$/, loader: 'html', exclude: /node_modules/ },
          { test: /\.ts(x?)$/, loader: 'babel!ts', exclude: [/node_modules/, './**/*.d.ts'] },
          { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
        ]
      },

      babel: {
        presets: ['es2015'],
        plugins: ['transform-decorators-legacy'],
        // fix >100KB issue. see: http://stackoverflow.com/a/29857361/1586914
        compact: false
      }
    },
    // plugins: [
    //   'karma-webpack',
    //   'karma-mocha',
    //   'karma-chai',
    //   'karma-phantomjs-launcher',
    //   'karma-mocha-reporter',
    //   'karma-chai-dom'
    // ],
    reporters: [ 'mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}
