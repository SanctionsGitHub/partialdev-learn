var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('default', function () {
     return gulp.src('./less')
    .pipe(less())
    .pipe(gulp.dest('./css'));
});

var sitemap = require('gulp-sitemap');

gulp.task('sitemap', function () {
    gulp.src('site/**/*.html', {
            read: false
        })
        .pipe(sitemap({
            siteUrl: 'https://learn.partialdev.com'
        }))
        .pipe(gulp.dest('./site'));
});
gulp.start.apply(gulp, ['sitemap']);
