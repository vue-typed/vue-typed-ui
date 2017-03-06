var gulp = require('gulp')
var through = require('through2')
var Path = require('path')
var _ = require('lodash')
var fs = require('fs')
var concat = require('gulp-concat')
var beautify = require('js-beautify').js_beautify
var utils = require('./utils')
var rename = require('gulp-rename')

module.exports = function(done) {
  gulp.src(['./doc/api.json'])
    .pipe(through.obj(function(file, enc, cb) {
      var json = JSON.parse(String(file.contents))
      var strComponents = ''
      var strRefs = '\r\nexport class Components {\r\n'

      _.each(json, function(obj) {
        if (obj.type === 'component') {
          strRefs += utils.comment(`Get instance of ${utils.pascalCase(obj.module)} from [ref]`) + '\r\n'
          strRefs += `${_.camelCase(obj.module)}(ref: string): I${utils.pascalCase(obj.module)}\r\n`
          strComponents += parseComponent(obj)
        }
      })

      strRefs += '}\r\n'

      file.contents = new Buffer(beautify(strComponents + strRefs), 'utf8')
      cb(null, file)
    }))
    .pipe(rename('interface.d.ts'))
    .pipe(gulp.dest('./lib'))
    .on('end', done)
}

function parseComponent(obj) {
  var str = `/// <reference path="./semantic-ui.d.ts" />\r\n\r\n`
  str += `export interface I${utils.pascalCase(obj.module)}`
    // if (!obj.base.Vue) {
    //   let k = _.keys(obj.base)[0]
    //   str += ` extends ${utils.pascalCase(k)}`
    // }
  str += ' {\r\n'

  _.each(obj.props, (p, k) => {
    str += utils.comment(p.description) + '\r\n'
    str += _.camelCase(k)
    if (p.type) str += `: ${p.type}`
    str += '\r\n'
  })

  _.each(obj.methods, (p, k) => {
    str += utils.comment(p.description) + '\r\n'
    str += _.camelCase(k)
    str += '('

    if (p.params) {
      str += _.map(p.params, function(vp, kp) {
        if (vp.type) {
          return kp + ': ' + vp.type
        }

        return kp
      }).join(', ')
    }

    str += ')'
    if (p.type) str += `: ${p.type}`
    str += '\r\n'
  })


  str += '}\r\n'
  return str + '\r\n'
}