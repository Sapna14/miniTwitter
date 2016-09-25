var express = require('express');
var router = express.Router();
var followersModel  = require('../models/followers')();

router.post('/follow', function(req, res) {
	console.log("inside the followers controller!!!!!!!!!",req.body);
    res.send('post handler for /follow route.');
    followersModel.check();
});

router.get('/:user_id', function(req, res) {
	console.log("inside the followers controller!/:user_id !!!!!!!!",req.params);
    followersModel.check();
});
module.exports = router;
