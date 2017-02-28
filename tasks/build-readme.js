var gulp = require('gulp')
var gulpCopy = require('gulp-copy')

module.exports = function(done) {
  gulp.src('./src/**/README.md')
    .pipe(gulpCopy('./demo/src/readme'))
    .on('end', done)
}