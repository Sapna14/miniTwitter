var express = require('express');
var router = express.Router();
var tweetsModel  = require('../models/tweets')();

router.post('/tweet', function(req, res) {
	console.log("inside the tweets controller!!!!!!!!!",req.body);
    res.send('post handler for /tweets route.');
    tweetsModel.tweet();
});

router.get('/timeline/:user_id', function(req, res) {
	console.log("inside the tweets controller!!!!!!!!!",req.params);
	res.send('post handler for /tweets route.');
    tweetsModel.timelineDisplay();
});
module.exports = router;
