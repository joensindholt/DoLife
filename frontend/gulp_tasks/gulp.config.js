var globalPath = {
    app : "./src/",
    bower : "./bower_components/"
};

module.exports = {
	app: {
        base: globalPath.app,
        html: [
            globalPath.app+"**/*.html"
        ],
        sass:[
            globalPath.app+'**/*.scss'
        ],
        img: [
            globalPath.app+"img/**/*",
        ],
        fonts: [
            globalPath.app+'fonts/**/*'
        ],
        sprite: [
            globalPath.app+"/sprite/**/*"
        ],
        tests: [
            globalPath.app+"/**/*_test.js"
        ]
    },
    libs: {
        script:[
            globalPath.bower+'jquery/dist/jquery.min.js',
            globalPath.bower+'angular/angular.js',
            globalPath.bower+'angular-route/angular-route.js',
            globalPath.bower+'angular-ui-router/release/angular-ui-router.js',
            globalPath.bower+'angular-aria/angular-aria.js',
            globalPath.bower+'angular-animate/angular-animate.js',
            globalPath.bower+'lodash/dist/lodash.min.js',
            globalPath.bower+'bootstrap/dist/js/bootstrap.min.js'
        ],
        css:[
            globalPath.bower+'bootstrap/dist/css/bootstrap.min.css',
            globalPath.bower+'font-awesome/css/font-awesome.min.css'
        ],
        fonts: [
            globalPath.bower+'font-awesome/fonts/*.*'
        ],
        sass:[
        ]
    },
    dist : "./dist/"
};
