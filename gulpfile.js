/**
 * Created by rost on 01.04.15.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function () {
    return gulp.src('app/*.js')
        .pipe('main.js')
        .pipe(gulp.dest('~/app/js/main.js'));
});