var gulp = require('gulp');
var postcss = require('gulp-postcss');
var precss = require('precss');

gulp.task('css', function() {
  var precessors = [
    precss
  ];

  return gulp.src('./src/*.css')
      .pipe(postcss(precessors))
      .pipe(gulp.dest('./dest'));
});

