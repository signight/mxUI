/**
 * Created by nightsign on 2017/3/3.
 */
// 获取 gulp
var gulp = require('gulp');
// 获取 minify-css 模块（用于压缩 CSS）
var minifycss = require('gulp-minify-css');
// 获取 autoprefixer 模块（用于添加CSS前缀）
var autoprefixer = require('gulp-autoprefixer');
//获取 gulp-watch-path 模块(用于侦测文件修改)
var watchPath = require('gulp-watch-path');
// 获取 gulp-util 模块 (用于日志染色);
var gutil = require('gulp-util');

var config = require('../config').css;

//一次编译所有 css 文件。可以配置 minifyss 任务。
gulp.task('minifycss', function () {
    gulp.src(config.all)
    // .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: 'last 2 versions'
        }))
        .pipe(minifycss())
        // .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.dest))
});

gulp.task('watchcss', function () {
    gulp.watch(config.all, function (event) {
        var paths = watchPath(event, config.srcDir, config.dest)

        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath)
        gutil.log('Dist ' + paths.distPath)

        gulp.src(paths.srcPath)
        // .pipe(sourcemaps.init())
            .pipe(autoprefixer({                    //编写标准语法的 css，autoprefixer 会自动补全
                browsers: 'last 2 versions'
            }))
            .pipe(minifycss())
            // .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(paths.distDir))
    })
});
