const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return src('./public/assets/styles/**/*.scss')
        .pipe(sass())
        .pipe(dest('./public/assets/styles/'));
}

function watchTask() {
    watch(['./public/assets/styles/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);