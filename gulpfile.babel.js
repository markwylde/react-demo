import gulp from 'gulp';
import eslint from 'gulp-eslint';
import gutil from 'gulp-util';
import rimraf from 'rimraf';
import webpack from 'webpack';
import istanbul from 'gulp-istanbul-plus';
import mocha from 'gulp-mocha';
import { Instrumenter } from 'isparta';

gulp.task('unit_tests', function(cb) {
  gulp.src(['src/**/*.js'])
    .pipe(istanbul({
      instrumenter: Instrumenter,
      includeUntested: true,
      babel: {
        plugins: ['rewire']
      },
      skipImports: /\.s{0,1}css$/
    }))
    .pipe(istanbul.hookRequire())
    .on('finish', function() {
      gulp.src(['src/**/*.spec.js'])
        .pipe(mocha())
        .pipe(istanbul.writeReports())
        .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }))
        .on('end', cb);
    });
});

gulp.task('eslint', function() {
  return gulp.src(['./src/**/*.jsx', './src/**/*.js'])
  .pipe(eslint({ configFile: '.eslintrc' }))
  .pipe(eslint.format('stylish'))
  .pipe(eslint.failOnError());
});

gulp.task('cleanDistFolder', function(callback) {
  rimraf('./dist/', callback);
});

gulp.task('webpack', ['eslint', 'cleanDistFolder'], function(callback) {
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
gulp.task('build', ['eslint', 'webpack', 'copyIndexFile']);
