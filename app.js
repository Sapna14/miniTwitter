var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();
var mysql = require('mysql')
// app.use(require('./controllers'))

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(path.join(__dirname, 'public')));

console.log("before calling the routes@@@@@");
app.use('/', routes);




//MYSQL connection

// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'test',
//   database: 'miniTwitter'
// })
// connection.connect(function(err) {
//   if (err) throw err
//   console.log('You are now connected...')
// })
/////////////////////////////////////////////////////////////////////////////////


// app.get('*', function(req, res) {
//     res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  //http://localhost:3000/ - url to hit
});

// app.get('/users', function (req, res) {
//   console.log("users");
//   var user_created;
//   connection.query('INSERT INTO users (id, user_id, name, password) VALUES (?, ?, ?, ?)', [1, 1,'sapna', 'pradeep'], function(err, result) {
//       console.log("insert query ****");
//       user_created = result;
//   })
//   res.send('user details created');
// });

// app.get('/users/:id/:user_id/:name/:password', function(req, res) {
//     connection.query('INSERT INTO users (id, user_id, name, password) VALUES (?, ?, ?, ?)', [req.params.id, req.params.user_id,req.params.name, req.params.password], function(err, result) {
//         console.log("insert query ****");    
//     })
//     res.send({id:req.params.id, user_id: req.params.user_id, name:req.params.name, password:req.params.password});
// });


////////******************/////////////////

// app.post('/users', function(req, res) {
//     var id = req.body.id;
//     var user_id = req.body.user_id;
//     var name = req.body.name;
//     var password = req.body.password;
//     connection.query('INSERT INTO users (id, user_id, name, password) VALUES (?, ?, ?, ?)', [id, user_id,name, password], function(err, result) {
//             console.log("insert query ****",result);    
//     })
//     res.send('row created in the users table');
// });

// app.post('/login', function(req, res) {
//   // console.log("inside the /login $$$$",req);
//     var user_id = req.body.name;
//     var password = req.body.password;
//     // 'SELECT * from tweets where user_id = (SELECT user_id from users where name = ? and password = ?);'
//     connection.query('SELECT * from tweets where user_id = (SELECT user_id from users where name = ? and password = ?)', [user_id, password], function(err, result) {
//             console.log("printing the results",result);
//             console.log("login query ****",JSON.stringify(result) );    
//             res.send(JSON.stringify(result));
//             // res.json(result);
//     })
// });

// app.post('/tweet', function(req, res) {
//     var user_id = req.body.user_id;
//     var text = req.body.text;
//     connection.query('INSERT INTO tweets (id, tweet_id, user_id, text, created_at) VALUES (?, ?, ?, ?, ?)', [1,2,user_id,text,'2016-03-14 11:40:06'], function(err, result) {
//             console.log("tweets creation query ****",result );    
//     })
//      res.send('row created in te tweets table');
// });

// app.post('/follow', function(req, res) {
//     var id = req.body.id;
//     var follower_id = req.body.follower_id;
//     var following_id = req.body.following_id;
//     connection.query('INSERT INTO followers (id, follower_id, following_id) VALUES (?, ?, ?)', [id, follower_id, following_id], function(err, result) {
//             console.log("follow creation &&&&&",result );    
//     })
//      res.send('row created in the followers table');
// });

// app.get('/followers/:user_id', function(req, res) {
//   var user_id = req.params.user_id;
//   var queryString = 'SELECT * FROM followers where follower_id = ?';
//     connection.query(queryString, [user_id], function(err, result) {
//         console.log("folllowers query***",response);   
//         res.send(JSON.stringify(result)); 
//     })   
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
//     connection.query(queryString, [user_id], function(err, result) {
//         console.log("timeline query***",result); 
//         res.send(JSON.stringify(result));    
//     })
// });


// app.get('/users/:user_id', function(req, res) {
//     var user_id = req.params.user_id;
//     var queryString = 'SELECT * from users where user_id = ?';
//     connection.query(queryString, [user_id], function(err, result) {
//         console.log("users query***",result); 
//         res.send(JSON.stringify(result));    
//     })
// });

////////******************/////////////////

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', routes);
// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
