// console.log("inside the users controller******	");
// var Users = function(){
// 	// var this= that;
// 	this.check = function(){
// 		console.log("printing the res from user controller%%%%%");
// 	};
// };

// exports.Users = Users;

// var UsersModel = require('./models/users');
// UsersModel.check();


var express = require('express');
var router = express.Router();
var usersModel  = require('../models/users')();

router.get('/:user_id', function(req, res) {
	console.log("inside the user controller!!!!!!!!!");
    usersModel.displayUser();
});

router.post('/signup', function(req, res) {
	console.log("signup  !!!!!!!");
    usersModel.signup(req.body.user_id, req.body.name, req.body.password);
	res.send('post handler for /users route.');

});

router.post('/login', function(req, res) {
	console.log("login  !!!!!!!");
    usersModel.login(sreq.body.name, req.body.password);
	res.send('post handler for /users route.');

});
module.exports = router;
