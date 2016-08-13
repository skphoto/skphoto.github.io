'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

//-----TASKS-----

gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')
  	.pipe(sass.sync().on('error', sass.logError))
  	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
    	stream: true
    }));
});

// brows-sync

gulp.task('browserSync', function() {
  browserSync.init({
  	server: {
  		baseDir: './'
  	},
  })
});

//----end-TASKS---
 
//-----WATCHES----

gulp.task('watch', ['browserSync', 'sass'], function () {
	gulp.watch('scss/**/*.scss', ['sass']);
	gulp.watch('index.html', browserSync.reload);
	gulp.watch('js/**/*.js', browserSync.reload);
});