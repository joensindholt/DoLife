var globalPath = {
    app : "./src/",
    bower : "./bower_components/"
};

module.exports = {
	app: {
        base: globalPath.app,
        html: [
            globalPath.app+"index.html"
        ],
        sass:[
            globalPath.app+'**/*.scss'
        ],
        partials: [
            globalPath.app+"**/*.html"
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
            globalPath.bower+'angular/angular.js',
            globalPath.bower+'angular-route/angular-route.js',
            globalPath.bower+'angular-ui-router/release/angular-ui-router.js',
            globalPath.bower+'angular-aria/angular-aria.js',
            globalPath.bower+'angular-animate/angular-animate.js',
            globalPath.bower+'angular-material/angular-material.js',
            globalPath.bower+'angular-media-queries/match-media.js',
            globalPath.bower+'lodash/dist/lodash.min.js'
        ],
        css:[
            globalPath.bower+'angular-material/angular-material.css'
        ],
        fonts: [
        ],
        sass:[
        ]
    },
    dist : "./dist/"
};
