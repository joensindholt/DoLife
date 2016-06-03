module.exports = function(gulp, settings, config, connect) {

    // EXPRESS server with compression enabled;
    if (settings.production) {
        var express = require('express');
        var serveStatic = require('serve-static');
        var compression = require('compression');

        gulp.task('serve', 'Run a static Node.js server for development on port ' + settings.port, ['default'], function() {
            var app = express();
            app.use(compression());
            app.use(serveStatic(config.dist));
            app.listen(settings.port);

            console.log("Express server started on port", settings.port);
            return gulp.src(config.dist);
        });
    } else {
        gulp.task('serve', 'Run a static Node.js server for development on port ' + settings.port, ['default'], function() {
            connect.server({
                port: settings.port,
                root: config.dist,
                livereload: true
            });
            return gulp.src(config.dist);
        });
    }
};
