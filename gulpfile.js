var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('eslint', function() {
  return gulp.src('./src/**/*.jsx')
  .pipe(eslint({ configFile: '.eslintrc' }))
  .pipe(eslint.formatEach('compact', process.stderr));
});

gulp.task('lint', ['eslint']);
