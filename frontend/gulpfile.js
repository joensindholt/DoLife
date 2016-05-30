var gulp = require('gulp-help')(require('gulp'));

var settings = require('./gulp_tasks/gulp.settings')();
var config = require('./gulp_tasks/gulp.config');

// define global connet server
var connect = require('gulp-connect');

require('./gulp_tasks/gulp.copy')(gulp, settings, config);
require('./gulp_tasks/gulp.partials')(gulp, settings, config);
require('./gulp_tasks/gulp.karma')(gulp, settings, config);
require('./gulp_tasks/gulp.libs.script')(gulp, settings, config);
require('./gulp_tasks/gulp.libs.css')(gulp, settings, config);
require('./gulp_tasks/gulp.app.css')(gulp, settings, config);
require('./gulp_tasks/gulp.ts')(gulp, settings, config);
require('./gulp_tasks/gulp.serve')(gulp, settings, config, connect);


// define tasks here
gulp.task('default', ['ts', 'libs.script', 'libs.css', 'copy', 'partials', 'app.css'], function(done){
    done();
});

gulp.task('watch', ['default', 'karma', 'serve'], function() {
  gulp.watch('src/**/*.ts', ['ts']);
  gulp.watch('src/**/*.html', ['copy', 'partials']);
  gulp.watch(config.app.sass, ['app.css']);
});
