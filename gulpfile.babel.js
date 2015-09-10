import gulp from 'gulp';
import eslint from 'gulp-eslint';
import gutil from 'gulp-util';
import rimraf from 'rimraf';
import webpack from 'webpack';

gulp.task('eslint', function() {
  return gulp.src('./src/**/*.jsx')
  .pipe(eslint({ configFile: '.eslintrc' }))
  .pipe(eslint.formatEach('compact', process.stderr));
});

gulp.task('cleanDistFolder', function(callback) {
  rimraf('./dist/', callback);
});

gulp.task('webpack', ['cleanDistFolder'], function(callback) {
  let webpackConfig = require('./webpack_dist.config.js');

  webpack(webpackConfig, function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }
    gutil.log('[webpack]', stats.toString({
        // output options
    }));
    callback();
  });
});

gulp.task('copyIndexFile', function() {
  return gulp.src('./src/index.html', {base: './src/'})
    .pipe(gulp.dest('./dist/'));
});

gulp.task('lint', ['eslint']);
gulp.task('build', ['webpack', 'copyIndexFile']);
