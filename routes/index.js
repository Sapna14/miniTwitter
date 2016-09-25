var express = require('express');
var app = express();
console.log("inside the index of routes ######");
var usersController = require('./../controllers/users');
var followersController = require('./../controllers/followers');
var tweetsController = require('./../controllers/tweets');

app.use('/users', usersController);
app.use('/followers', followersController);
app.use('/tweets', tweetsController);

module.exports = app;

