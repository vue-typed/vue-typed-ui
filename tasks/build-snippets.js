/**
 * Experimental
 */
var gulp = require('gulp')
var utils = require('./utils')
var through = require('through2')
var beautify = require('js-beautify').js_beautify

module.exports = function(done) {
  gulp.src('./doc/api.json')
    .pipe(through.obj(function(file, enc, cb) {
      var json = JSON.parse(String(file.contents))
      var results = {}
      var res = _.each(json, function(m) {
        results['ui-' + m.module] = {
          prefix: 'ui-' + m.module,
          body: '<ui-' + m.module + '>$0</ui-' + m.module + '>',
          'description': 'VueTypedUI ' + utils.pascalCase(m.module)
        }
      })

      file.contents = new Buffer(beautify(JSON.stringify(results)))
      cb(null, file)
    }))
    .pipe(rename('snippets.json'))
    .pipe(gulp.dest('./doc'))
    .on('end', done)
}