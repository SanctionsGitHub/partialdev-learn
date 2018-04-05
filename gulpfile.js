var gulp = require("gulp");
var path = require('path');
var sitemap = require('gulp-sitemap');

gulp.task('default', function () {

     return gulp.src('./less/main.less')

    .pipe(less())

    .pipe(gulp.dest('./site/css'));

});

var sitemap = require('gulp-sitemap');

gulp.task('sitemap', function () {
    gulp.src('site/**/*.html', {
            read: false
        })
        .pipe(sitemap({
            siteUrl: 'https://partialdev.com'
        }))
        .pipe(gulp.dest('./site'));
});

gulp.start.apply(gulp, ['sitemap']);
