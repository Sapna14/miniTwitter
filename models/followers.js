// var DB = appRequire('config/db');

// app.post('/follow', function(req, res) {
//     var id = req.body.id;
//     var follower_id = req.body.follower_id;
//     var following_id = req.body.following_id;
//     DB.query('INSERT INTO followers (id, follower_id, following_id) VALUES (?, ?, ?)', [id, follower_id, following_id], function(err, result) {
//             console.log("follow creation &&&&&",result );    
//     })
//      res.send('row created in the followers table');
// });

// app.get('/followers/:user_id', function(req, res) {
//   var user_id = req.params.user_id;
//   var queryString = 'SELECT * FROM followers where follower_id = ?';
//     DB.query(queryString, [user_id], function(err, result) {
//         console.log("folllowers query***",response);   
//         res.send(JSON.stringify(result)); 
//     })   
// });

var DB = require('../config/db');

module.exports = function(){
  return {
    
        check: function(){
          console.log("inside the model followers $$$$$$$$$$$$ ");
        },

        follow: function (follower_id, following_id) {
          DB.query('INSERT INTO followers (id, follower_id, following_id) VALUES (?, ?, ?)', [id, follower_id, following_id], function(err, result) {
            console.log("follow creation &&&&&",result );    
          })
        },

        followersList: function (user_id) {
          var queryString = 'SELECT * FROM followers where follower_id = ?';
          DB.query(queryString, [user_id], function(err, result) {
              console.log("folllowers query***",response);   
          })   

        }

    }
}