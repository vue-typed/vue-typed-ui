var gulp = require('gulp')
var through = require('through2')
var _ = require('lodash')
var rename = require('gulp-rename')
var Path = require('path')
var concat = require('gulp-concat')
var gulpCopy = require('gulp-copy')
var beautify = require('js-beautify').js_beautify
var fs = require('fs')

var tasks = ['build:methods', 'build:props', 'build:api']
gulp.task('build', tasks)
gulp.task('build:all', tasks.concat(['build:readme']))

gulp.task('watch', function () { 
  gulp.watch('./src/**/README.md', ['build:readme'])
  gulp.watch('./src/components/**/schema/*.json', ['build']) 
})


gulp.task('build:readme', function() {
  gulp.src('./src/**/README.md').pipe(gulpCopy('./demo/docs'))
})


function hasReadme(path) {
  var toCheck = Path.join(path, 'README.md')
  var exists = statPath(toCheck);
  return exists && exists.isFile() 
}

function statPath(path) {
  try {
    return fs.statSync(path);
  } catch (ex) {}
  return false;
}

gulp.task('build:api', function () {
  gulp.src(['./src/components/**/schema/*.json', './src/modules/*/index.ts', './src/filters/*/index.ts', './src/decorators/*/index.ts'])
    .pipe(through.obj(function (file, enc, cb) {
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

          var dir = Path.relative('./',  Path.dirname(file.path))
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
          var kind = Path.basename(file.path, '.json')
          var module = Path.basename(Path.resolve(Path.dirname(file.path), '..'))
          var json = JSON.parse(String(file.contents))
          var isBase = false
          var base = {}
          if (kind === 'props') {
            isBase = json.isBase
            base = json.base
            json = json.props
          }

          var dir = Path.relative('./',  Path.dirname(file.path))          
          var result = {
            dir: dir.substr(0, dir.length - '\\schema'.length),
            module: module,
            kind: kind,
            value: json,
            isBase: isBase,
            base: base,
            type: 'component'            
          }

          file.contents = new Buffer(JSON.stringify(result))
      }

      cb(null, file)
    }))
    .pipe(concat('api.json', {newLine: ',\r\n'}))
    .pipe(through.obj(function (file, enc, cb) {
      var json = JSON.parse('[' + String(file.contents) + ']')
      json = _.map(json, function (v) {
        var obj = {
          dir: v.dir.replace(/\\/g, '/'),
          id: v.type + '/' + v.module,
          module: v.module,
          isBase: v.isBase,
          base: v.base,
          type: v.type,
          readme: hasReadme(v.dir)
        }

        if (v.kind)
          obj[v.kind] = v.value

        return obj
      })

      json = _.groupBy(json, 'id')
      // json = _.groupBy(json, 'module')
      json = _.mapValues(json, function (v) { return _.merge.apply({}, v) })

      _.each(json, function (obj, k) {
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
          obj.props = sortByKey(obj.props)
          obj.methods = sortByKey(obj.methods)
        }
      })

      json = sortByKey(json)

      file.contents = new Buffer(beautify(JSON.stringify(json), {indent_size: 2}))

      cb(null, file)
    }))
    .pipe(gulp.dest('./doc'))
})

gulp.task('build:modules', function () {
  gulp.src('./src/modules/*/index.ts')
    .pipe(through.obj(function (file, enc, cb) {
      var moduleName = Path.basename(Path.dirname(file.path))
      cb(null, file)
    }))
})

gulp.task('build:methods', function () {
  gulp.src('./src/components/**/schema/methods.json')
    .pipe(through.obj(function (file, enc, cb) {
      file.contents = new Buffer(parseMethod(Path.basename(Path.resolve(Path.dirname(file.path), '..')), String(file.contents)))
      cb(null, file)
    }))
    .pipe(concat('methods.d.ts', {newLine: '\r\n\r\n'}))
    .pipe(through.obj(function (file, enc, cb) {
      var contents = String(file.contents)
      var methods = 'export class VueTypedUIMethods {\r\n'
      _.each(contents.match(/export interface(.*?){/g), function (s) {
        var name = s.substring(17)
        name = name.substr(0, name.length - 1).trim()
        methods += '\r\n' + _.camelCase(name) + '(element: string | HTMLElement | JQuery): ' + pascalCase(name)
      })
      methods += '\r\n\r\n}'
      contents = beautify(contents + '\r\n\r\n' + methods)
      file.contents = new Buffer(contents)

      cb(null, file)
    }))
    .pipe(gulp.dest('./lib'))
})

gulp.task('build:props', function () {
  gulp.src('./src/components/**/schema/props.json')
    .pipe(through.obj(function (file, enc, cb) {
      file.contents = new Buffer(parseProp(Path.basename(Path.resolve(Path.dirname(file.path), '..')), String(file.contents)))
      cb(null, file)
    }))
    .pipe(rename(function (path) {
      path.extname = '.ts'
      path.basename = '_base'
      path.dirname = path.dirname.substr(0, path.dirname.length - 7)
    }))
    .pipe(gulp.dest(function (file) {
      return file.base
    }))
})

gulp.task('build:snippets', function () {
  gulp.src('./doc/api.json')
    .pipe(through.obj(function (file, enc, cb) {
      var json = JSON.parse(String(file.contents))
      var results = {}
      var res = _.each(json, function (m) {
        results['ui-' + m.module] = {
          prefix: 'ui-' + m.module,
          body: '<ui-' + m.module + '>$0</ui-' + m.module + '>',
          'description': 'VueTypedUI ' + pascalCase(m.module)
        }
      })

      file.contents = new Buffer(beautify(JSON.stringify(results)))
      cb(null, file)
    }))
    .pipe(rename('snippets.json'))
    .pipe(gulp.dest('./doc'))
})

function parseProp (module, json) {
  var schema = JSON.parse(json)
  var strProps = ''

  strProps += comment('PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)')

  if (schema.description) {
    strProps += comment(schema.description)
  }

  // strProps += 'import { Component, Prop } from "vue-typed"'
  strProps += 'import { Prop } from "vue-typed"'
  strProps += '\r\nimport '
  var base = _.keys(schema.base)[0]
  if (base === 'Vue') {
    strProps += '* as Vue from "vue"\r\n'
  } else {
    strProps += '{ ' + base + ' } from "' + schema.base[base] + '"\r\n'
  }

  // strProps += '\r\n@Component({ name: "'+ pascalCase(module) +'Base" })'
  strProps += '\r\nexport abstract class _' + pascalCase(module) + 'Base extends ' + base + ' { '

  var props = schema.props
  _.each(props, (v, k) => {
    strProps += '\r\n' + comment(v)
    strProps += '\r\n@Prop('
    if (v.type && v.type !== 'any' && v.type.indexOf('|') <= -1 && v.type.indexOf('.') <= -1) {
      strProps += '{ '
      strProps += 'type: ' + pascalCase(v.type)
      strProps += ' }'
    }
    strProps += ')'
    strProps += '\r\n' + _.camelCase(k)
    if (v.type) {
      strProps += ': ' + v.type
    }
    if (typeof (v.default) !== 'undefined') {
      strProps += ' = ' + v.default
    }
  })
  strProps += '\r\n\r\n}'
  return beautify(strProps)
}

function parseMethod (module, json) {
  var schema = JSON.parse(json)
  var strMethods = ''

  if (schema.description) {
    strMethods += comment(schema.description)
  }

  strMethods += '\r\nexport interface ' + pascalCase(module) + ' {'

  _.each(schema, (v, k) => {
    strMethods += '\r\n' + comment(v)
    strMethods += '\r\n' + k + '('
    if (v.params) {
      strMethods += _.map(v.params, function (vp, kp) {
        if (vp.type) {
          return kp + ': ' + vp.type
        }

        return kp
      }).join(', ')
    }

    var type = v.type || 'void'
    strMethods += '): ' + type
  })

  strMethods += '\r\n\r\n}'

  return strMethods
}

function comment (setting) {
  var cmt = '\r\n/**'

  if (_.isString(setting)) {
    cmt += '\r\n * ' + setting
  } else {
    cmt += '\r\n * ' + setting.description

    if (setting.params || setting.default || setting.category || setting.type)
      cmt += '\r\n * '

    if (setting.category)
      cmt += '\r\n * Category: ' + setting.category

    if (setting.params) {
      _.each(setting.params, function (prm, k) {
        cmt += '\r\n * @param {' + prm.type + '} ' + k
        if (prm.description)
          cmt += ' ' + prm.description
      })
    }

    if (setting.default) {
      cmt += '\r\n * @default ' + setting.default
    }

    if (setting.type) {
      if (setting.isFunction)
        cmt += '\r\n * @returns {' + setting.type + '}'
      else
        cmt += '\r\n * @type {' + setting.type + '}'
    }
  }
  return cmt + '\r\n */'
}

function pascalCase (str) {
  return _.upperFirst(_.camelCase(str))
}

function sortByKey (obj) {
  return _(obj).toPairs().sortBy(0).fromPairs().value()
}
