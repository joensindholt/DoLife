var gulp = require('gulp');
var ts = require('gulp-typescript');


module.exports = function(gulp, settings, config) {

    gulp.task('ts-copy-model-from-api', function() {
        return gulp.src('./../api/src/model.ts')
            .pipe(gulp.dest('src'));

    });

    gulp.task('ts', ['ts-copy-model-from-api'], function() {

        var tsProject = ts.createProject('src/tsconfig.json');

        var tsResult = tsProject.src()
            .pipe(ts(tsProject));

        return tsResult.js.pipe(gulp.dest('.'));
    });
}
