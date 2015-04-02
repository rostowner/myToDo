/**
 * Created by rost on 01.04.15.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var watcher = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

gulp.task('debug-scripts', function () {
    return gulp.src('app/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('app'));
});

gulp.task('min-scripts', function () {
    return gulp.src('app/js/*.js')
        .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('app'));
});

gulp.task('bedug-scss', function () {
    return gulp.src('app/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(concat('common.css'))
        .pipe(gulp.dest('app'));
});

gulp.task('default-scripts', ['debug-scripts', 'min-scripts']);
gulp.task('default-scss', ['bedug-scss']);

gulp.task('default', ['default-scripts', 'default-scss']);

gulp.watch('app/js/*.js', ['default-scripts']);
gulp.watch('app/scss/*.scss', ['default-scss']);