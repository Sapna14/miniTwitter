// var DB = appRequire('config/db');


// app.post('/tweet', function(req, res) {
//     var user_id = req.body.user_id;
//     var text = req.body.text;
//     DB.query('INSERT INTO tweets (id, tweet_id, user_id, text, created_at) VALUES (?, ?, ?, ?, ?)', [1,2,user_id,text,'2016-03-14 11:40:06'], function(err, result) {
//             console.log("tweets creation query ****",result );    
//     })
//      res.send('row created in te tweets table');
// });

// app.get('/timeline/:user_id', function(req, res) {
//     var user_id = req.params.user_id;
//     // var queryString1 = 'SELECT following_id from followers where follower_id = ?'
//     // var following_array = [];
//     // connection.query(queryString1, [user_id], function(err, result) {
//     //     console.log("timeline query***",result); 
//     //     var follow = JSON.stringify(result);
        
//     //     res.send(JSON.stringify(result));    
//     // })
//     var queryString = 'SELECT * from tweets where user_id = ?';
//     DB.query(queryString, [user_id], function(err, result) {
//         console.log("timeline query***",result); 
//         res.send(JSON.stringify(result));    
//     })
// });

var DB = require('../config/db');
module.exports = function(){
  return {
    
        check: function(){
          console.log("inside the model tweets @@@@@@@@@@");
        },

        tweet: function (tweet_id, user_id, txt, created_at) {
        	DB.query('INSERT INTO tweets (id, tweet_id, user_id, text, created_at) VALUES (?, ?, ?, ?, ?)', [1,2,user_id,text,'2016-03-14 11:40:06'], function(err, result) {
            	console.log("tweets creation query ****",result );    
    		})      	
        },
        
        timelineDisplay: function (user_id) {
        	var queryString = 'SELECT * from tweets where user_id = ?';
		    DB.query(queryString, [user_id], function(err, result) {
		        console.log("timeline query***",result); 
		    })
        }

    }
}