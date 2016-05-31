/*jslint node: true */
"use strict";

var TaskRoutes = require('./tasks/task.routes');

class Routes {
    registerRoutes(app) {
        new TaskRoutes().registerRoutes(app);
        // Register more resource routes here when needed
    }
}

module.exports = Routes;
