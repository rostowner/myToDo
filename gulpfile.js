/**
 * Created by rost on 01.04.15.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var watcher = require('gulp-watch');

gulp.task('debug-scripts', function () {
    return gulp.src('app/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('app/js'));
});

gulp.task('min-scripts', function () {
    return gulp.src('app/*.js')
        .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

gulp.task('default', ['debug-scripts', 'min-scripts']);

gulp.watch('app/*.js', ['default']);