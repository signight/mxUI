/**
 * Created by nightsign on 2017/3/3.
 */
// 获取 gulp
var gulp = require('gulp');
// 获取 uglify 模块（用于压缩 JS）
var uglify = require('gulp-uglify');
//获取 gulp-watch-path 模块(用于侦测文件修改)
var watchPath = require('gulp-watch-path');
// 获取 gulp-util 模块 (用于日志染色);
var gutil = require('gulp-util');

var handleError = function (err) {
    var colors = gutil.colors;
    console.log('\n');
    gutil.log(colors.red('Error!'));
    gutil.log('fileName: ' + colors.red(err.fileName));
    gutil.log('lineNumber: ' + colors.red(err.lineNumber));
    gutil.log('message: ' + err.message);
    gutil.log('plugin: ' + colors.yellow(err.plugin))
};
// 获取 stream-combiner2 模块(用于捕获错误)
var combiner = require('stream-combiner2');

var config = require('../config').js;

//压缩JS
gulp.task('minifyjs', function () {
    gulp.src(config.all)
        .pipe(uglify())
        .pipe(gulp.dest(config.dest));
});

gulp.task('watchjs', function () {
    gulp.watch(config.all, function (event) {
        var paths = watchPath(event, config.srcDir, config.dest);
        //
        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath);
        gutil.log('Dist ' + paths.distPath);

        var combined = combiner.obj([
            gulp.src(paths.srcPath),
            uglify(),
            gulp.dest(paths.distDir)
        ]);

        combined.on('error', handleError);
    })
});
