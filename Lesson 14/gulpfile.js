const gulp = require('gulp');
const babel = require('gulp-babel');// приводит код к стандарту ЕS5
const minify = require('gulp-minify');

gulp.task('build', done => { // название задачи
    gulp.src('hello.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(minify())
        .pipe(gulp.dest('./build')); // взять то что получилось и записать в папку
        done();

});
