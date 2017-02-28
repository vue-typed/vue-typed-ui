var gulp = require('gulp')
var through = require('through2')
var Path = require('path')
var _ = require('lodash')
var fs = require('fs')
var concat = require('gulp-concat')
var beautify = require('js-beautify').js_beautify
var utils = require('./utils')

module.exports = function(done) {
  gulp.src(['./src/components/**/schema/*.json', './src/modules/*/index.ts', './src/filters/*/index.ts', './src/decorators/*/index.ts'])
    .pipe(through.obj(function(file, enc, cb) {

      switch (Path.extname(file.path)) {

        case '.ts':
          var relativePath = (Path.relative('./src', file.path))
          var type = ''
          if (relativePath.startsWith('modules'))
            type = 'module'
          else if (relativePath.startsWith('filters'))
            type = 'filter'
          if (relativePath.startsWith('decorators'))
            type = 'decorator'

          var dir = Path.relative('./', Path.dirname(file.path))
          var moduleName = Path.basename(Path.dirname(file.path))
          var result = {
            dir: dir,
            module: moduleName,
            value: moduleName,
            type: type
          }

          file.contents = new Buffer(JSON.stringify(result))
          break

        case '.json':
          var moduleName = Path.basename(Path.resolve(Path.dirname(file.path), '..'))
          var json = JSON.parse(String(file.contents))
          var dir = Path.relative('./', Path.dirname(file.path))
          var result = {
            dir: dir.substr(0, dir.length - '\\schema'.length),
            module: moduleName,
            value: {
              props: json.props,
              methods: json.methods
            },
            isBase: json.isBase,
            base: json.base,
            type: 'component'
          }

          file.contents = new Buffer(JSON.stringify(result))
      }

      cb(null, file)
    }))
    .pipe(concat('api.json', { newLine: ',\r\n' }))
    .pipe(through.obj(function(file, enc, cb) {
      var json = JSON.parse('[' + String(file.contents) + ']')
      json = _.map(json, function(v) {
        var obj = {
          dir: v.dir.replace(/\\/g, '/'),
          id: v.type + '/' + v.module,
          module: v.module,
          isBase: v.isBase,
          base: v.base,
          type: v.type,
          readme: utils.hasReadme(v.dir),
          props: v.value.props,
          methods: v.value.methods
        }
        return obj
      })

      json = _.groupBy(json, 'id')
      json = _.mapValues(json, function(v) { return _.merge.apply({}, v) })

      _.each(json, function(obj, k) {
        if (obj.type === 'component') {

          // extending base props
          var baseKey = _.keys(obj.base)[0]
          while (baseKey !== 'Vue') {
            var base = json['component/' + _.kebabCase(baseKey)]
            if (base) {
              _.extend(obj.props, base.props)
            }
            baseKey = _.keys(base.base)[0]
          }

          // sorting
          obj.props = utils.sortByKey(obj.props)
          obj.methods = utils.sortByKey(obj.methods)
        }
      })

      json = utils.sortByKey(json)

      file.contents = new Buffer(beautify(JSON.stringify(json), { indent_size: 2 }))

      cb(null, file)
    }))
    .pipe(gulp.dest('./doc'))
    .on('end', done)

}