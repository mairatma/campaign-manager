'use strict';

var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');
var gulp = require('gulp');
var ignore = require('gulp-ignore');
var soynode = require('gulp-soynode');
var watch = require('gulp-watch');

gulp.task('css:bootstrap', function() {
	return gulp.src([
			'node_modules/bootstrap/dist/css/bootstrap.css',
			'node_modules/bootstrap/dist/css/bootstrap.css.map'
		])
		.pipe(gulp.dest('public/css'));
});

gulp.task('css:watch', function() {
	watch('css/**/*.css', function() {
		gulp.run(['css']);
	});
});

gulp.task('css', ['css:bootstrap'], function() {
	return gulp.src('src/css/**/*.css')
		.pipe(concatCss('bundle.css'))
		.pipe(gulp.dest('public/css'));
});

gulp.task('soy:server', function() {
	return gulp.src(['src/**/*.soy', 'server/**/*.soy'])
		.pipe(soynode())
		.pipe(ignore.exclude('*.soy'))
		.pipe(concat('bundle.soy.js'))
		.pipe(gulp.dest('server/soy'));
});
