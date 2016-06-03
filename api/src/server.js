/*jslint node: true */
"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
const cors = require('cors');
const fs = require('fs');
const colors = require('colors');

const Routes = require('./routes');

// Load AWS configuration
const awsConfigPath = './src/aws.config.json';
try {
    AWS.config.loadFromPath(awsConfigPath);
}
catch(err) {
    if (err.code === 'ENOENT') {
        console.error(`ERROR: Could not load AWS configuration from ${awsConfigPath}. Did you follow the guide in the Github Readme?`.red);
        return;
    } else {
        throw err;
    }
}

// Initialize express
let app = express();

// Configure our app to use bodyParser(it let us get the json data from a POST)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Allow CORS
app.use(cors());

// Not doing real authentication, we just set userId to "1"
app.use((req, res, next) => {
    req.userId = "1";
    next();
});

// Init routes
let routes = new Routes();
routes.registerRoutes(app);

// Start listening
let port = process.env.PORT || 8888;
app.listen(port);
console.log('Server listening at: http://localhost:' + port);
