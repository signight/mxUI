/**
 * Created by nightsign on 2017/3/3.
 */
//配置文件复制任务
// 获取 gulp
var gulp = require('gulp');
//获取 gulp-watch-path 模块(用于侦测文件修改)
var watchPath = require('gulp-watch-path');
// 获取 gulp-util 模块 (用于日志染色);
var gutil = require('gulp-util');
gulp.task('watchcopy', function () {
    gulp.watch('src/fonts/**/*', function (event) {
        var paths = watchPath(event)

        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath)
        gutil.log('Dist ' + paths.distPath)

        gulp.src(paths.srcPath)
            .pipe(gulp.dest(paths.distDir))
    })
})

gulp.task('copy', function () {
    gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts/'))
})