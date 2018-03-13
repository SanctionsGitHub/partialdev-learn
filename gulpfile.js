var gulp = require("gulp");
var less = require('gulp-less');
var path = require('path');
 
gulp.task('default', function () {
     return gulp.src('./styles.less')
    .pipe(less())
    .pipe(gulp.dest('./site/css/main.css'));
});
