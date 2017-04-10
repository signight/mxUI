/**
 * Created by nightsign on 2017/3/3.
 */
// 获取 gulp
var gulp = require('gulp');
// 获取 gulp-ruby-scss 模块(用于转译sass)
var sass = require('gulp-ruby-sass');
// 获取 minify-css 模块（用于压缩 CSS）
var minifycss = require('gulp-minify-css');
// 获取 autoprefixer 模块（用于添加CSS前缀）
var autoprefixer = require('gulp-autoprefixer');
//获取 gulp-watch-path 模块(用于侦测文件修改)
var watchPath = require('gulp-watch-path');
// 获取 gulp-util 模块 (用于日志染色);
var gutil = require('gulp-util');

var config = require('../config').sass;

gulp.task('sasscss', function () {
    sass(config.src)
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        // .pipe(sourcemaps.init())
        .pipe(minifycss())
        .pipe(autoprefixer({
            browsers: 'last 2 versions'
        }))
        // .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.dest));
});

gulp.task('watchsass', function () {
    gulp.watch(config.all, function (event) {
        var paths = watchPath(event, config.srcDir, config.dest)

        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath)
        gutil.log('Dist ' + paths.distPath)
        sass(paths.srcPath)
            .on('error', function (err) {
                console.error('Error!', err.message);
            })
            // .pipe(sourcemaps.init())
            .pipe(minifycss())
            .pipe(autoprefixer({
                browsers: 'last 2 versions'
            }))
            // .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(paths.distDir))
    })
})