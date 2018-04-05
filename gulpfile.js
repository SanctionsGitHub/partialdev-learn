
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var sitemap = require('gulp-sitemap');

gulp.task('default', function () {
     return gulp.src('./less')
    .pipe(less())
    .pipe(gulp.dest('./css'));
});

gulp.task('default', function () {
    gulp.src('site/**/*.html', {
            read: false
        })
        .pipe(sitemap({
            siteUrl: 'https://learn.partialdev.com'
        }))
        .pipe(gulp.dest('./site'));
