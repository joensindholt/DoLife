module.exports = function(gulp, settings, config) {

    gulp.task('partials', 'Copy files that does not to be processed from the source to the dist folder', function() {
        return gulp.src(config.app.partials)
            .pipe(gulp.dest('partials', {
                cwd: config.dist
            }));
    });
};
