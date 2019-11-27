'use strict';

/* ============ Gulp.js configuration ============*/

// modules commom
var gulp                = require('gulp');
var gulpsequence        = require('gulp-sequence');

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
  .pipe(sass({outputStyle:"expanded"}))
  .pipe(gulp.dest('./src/'))
  .pipe(browserSync.stream());
});

/* ============ server task ============*/
gulp.task('server', function() {
  gulp.watch('./src/scss/*.scss', ['sass']);
});
 


/* ========================================================================================================================
ROUTINES
======================================================================================================================== */

gulp.task('dev', gulpsequence(['sass'],'server'));