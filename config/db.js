var mysql = require('mysql');
module.exports = function() {
	var connection = mysql.createConnection({
	  host: 'localhost',
	  user: 'root',
	  password: 'test',
	  database: 'miniTwitter'
	})
	connection.connect(function(err) {
	  if (err) throw err
	  console.log('You are now connected...')
	})
	return connection;
}();