/*jslint node: true */
"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
const cors = require('cors');

const Routes = require('./routes');

// Load AWS configuration
AWS.config.loadFromPath('./src/aws.config.json');

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
