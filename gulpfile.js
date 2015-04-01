/**
 * Created by rost on 31.03.15.
 */
var gulp = require('gulp');

gulp.task('scripts', function () {
    gulp.src('node_modules/angular/*.js')
        .pipe(contact('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});