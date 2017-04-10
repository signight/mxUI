/**
 * Created by nightsign on 2017/3/3.
 * 创建gulp配置文件
 */
var src = './src';
var dest = './dist';

module.exports = {
    sass: {
        all: src + "/scss/**/*.scss",  //所有scss
        src: src + "/scss/*.scss",     //需要编译的scss
        srcDir: src + "/scss",
        dest: dest + "/css",　　　　　　 //输出目录
        settings: {　　　　　　　　　　　 //编译scss过程需要的配置，可以为空

        }
    },
    css: {
        all: src + "/css/**/*.css",
        srcDir: src + "/css",
        dest: dest + "/css"
    },
    js: {
        all: src + "/js/**/*.js",
        srcDir: src + "/js",
        dest: dest + "/js"
    },
    images: {
        src: src + '/img/**/*',
        srcDir:src + '/img/',
        dest: dest + '/img'
    }
};