/**
 * Created by nightsign on 2017/3/3.
 */
// 获取 gulp
var gulp = require('gulp');
// 获取 gulp-imagemin 模块(用于压缩 图片)
var imagemin = require('gulp-imagemin');

var config = require('../config').images;

gulp.task('images', function () {
    gulp.src(config.src)
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(
            gulp.dest(config.dest)
        )
});

gulp.task('watchimage', function () {
    gulp.watch(config.src, function (event) {
        var paths = watchPath(event, config.srcDir, config.dest);

        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath);
        gutil.log('Dist ' + paths.distPath);

        gulp.src(paths.srcPath)
            .pipe(imagemin({
                progressive: true
            }))
            .pipe(gulp.dest(paths.distDir))
    })
})