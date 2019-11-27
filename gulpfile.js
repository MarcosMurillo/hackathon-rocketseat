'use strict';

/* ============ Gulp.js configuration ============*/

// modules commom
var gulp                = require('gulp');
var gulpsequence        = require('gulp-sequence');

// modules scss
var sassLint             = require('gulp-sass-lint');

// modules css
var sass                = require('gulp-sass');

// modules server
var browserSync         = require('browser-sync').create();
var watch               = require('gulp-watch');

/* ============ sass task ============*/
gulp.task('sass', function(){
  return gulp.src([
    './src/scss/style.scss'
  ])
  .pipe(sassLint())
  .pipe(sassLint.format())
  .pipe(sassLint.failOnError())
  .pipe(sass({outputStyle:"expanded"}))
  .pipe(gulp.dest('./src/'))
  .pipe(browserSync.stream());
});

/* ============ server task ============*/
gulp.task('server', function() {
  gulp.watch('./src/scss/*.scss', ['sass']);
  gulp.watch("./src/*.html").on('change', browserSync.reload);
});
 


/* ========================================================================================================================
ROUTINES
======================================================================================================================== */

gulp.task('dev', gulpsequence(['sass'],'server'));