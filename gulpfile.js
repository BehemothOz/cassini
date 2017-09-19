'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var jade = require('gulp-jade');
var autoprefixer = require('autoprefixer');
var use = require('postcss-use');
var precss = require('precss');
var normalize = require('postcss-normalize');
var browserSync = require('browser-sync').create();
var pxtorem = require('postcss-pxtorem'); 
var focus = require('postcss-focus');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');


// Jade
gulp.task('jade', function() {
  return gulp.src('src/jade/index.jade')

  .pipe(plumber({
    errorHandler: notify.onError(function (err) {
      return {
        title: 'Jade Error',
        message: err.message
      };
    })
  }))
  .pipe(jade({ pretty: true }))
  .pipe(gulp.dest('dist/'))
  .pipe(browserSync.reload({
            stream: true
        }))
});


// Css
gulp.task('css', function() {
  var processors = [
        use( { modules: ['postcss-normalize'] }),
        precss(),

        autoprefixer(),
        pxtorem(),
        focus()

    ];

    return gulp.src('src/css/main.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


// Image (copy)
gulp.task('copy:img', function () {
    return gulp.src('src/img/*.*')
        .pipe(gulp.dest('dist/img/'))
});


// Task Watch
gulp.task('watch', ['jade', 'css', 'copy:img', 'serv'], function() {
    gulp.watch('src/css/**/*.css', ['css']);
    gulp.watch('src/jade/**/*.jade', ['jade']);
});


// Task BrowserSync
gulp.task('serv', function() {
    browserSync.init({
        server: {
            baseDir: 'dist/'
        }
    });
});
