// var check = function(){
// 	console.log("inside the model users ");
// }

var DB = require('../config/db');
//DB.model('User', ...);

// app.post('/users', function(req, res) {
//     var id = req.body.id;
//     var user_id = req.body.user_id;
//     var name = req.body.name;
//     var password = req.body.password;
//     DB.query('INSERT INTO users (id, user_id, name, password) VALUES (?, ?, ?, ?)', [id, user_id,name, password], function(err, result) {
//             console.log("insert query ****",result);    
//     })
//     res.send('row created in the users table');
// });


// app.post('/login', function(req, res) {
//   // console.log("inside the /login $$$$",req);
//     var user_id = req.body.name;
//     var password = req.body.password;
//     // 'SELECT * from tweets where user_id = (SELECT user_id from users where name = ? and password = ?);'
//     DB.query('SELECT * from tweets where user_id = (SELECT user_id from users where name = ? and password = ?)', [user_id, password], function(err, result) {
//             console.log("printing the results",result);
//             console.log("login query ****",JSON.stringify(result) );    
//             res.send(JSON.stringify(result));
//             // res.json(result);
//     })
// });

// app.get('/users/:user_id', function(req, res) {
//     var user_id = req.params.user_id;
//     var queryString = 'SELECT * from users where user_id = ?';
//     DB.query(queryString, [user_id], function(err, result) {
//         console.log("users query***",result); 
//         res.send(JSON.stringify(result));    
//     })
// });

module.exports = function(){
  return {

        check: function(){
          console.log("inside the model users ");
        },

        signup: function(user_id, name, password){
            var id = 4;
            console.log("printing params ****", user_id, name, password);
            DB.query('INSERT INTO users (id, user_id, name, password) VALUES (?, ?, ?, ?)', [id, user_id,name, password], function(err, result) {
                    console.log("insert query ****",result);    
            });
        },

        login: function (user_id, password) {
            DB.query('SELECT * from tweets where user_id = (SELECT user_id from users where name = ? and password = ?)', [user_id, password], function(err, result) {
                console.log("printing the results",result);
                console.log("login query ****",JSON.stringify(result) );   
            })
        },

        displayUser: function (user_id) {
            var queryString = 'SELECT * from users where user_id = ?';
            DB.query(queryString, [user_id], function(err, result) {
                console.log("users query***",result); 
            })
        }
    }
}