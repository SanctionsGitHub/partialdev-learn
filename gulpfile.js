var gulp = require("gulp");
var path = require('path');
var sitemap = require('gulp-sitemap');

gulp.task('default', function () {

     return gulp.src('./less/main.less')

    .pipe(less())

    .pipe(gulp.dest('./site/css'));

});

var sitemap = require('gulp-sitemap');

gulp.task('default', function () {
    gulp.src('site/**/*.html', {
            read: false
        })
        .pipe(sitemap({
            siteUrl: 'https://learn.partialdev.com'
        }))
        .pipe(gulp.dest('./site'));
});
