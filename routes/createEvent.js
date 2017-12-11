var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var connection_info = {
  host: 'us-cdbr-iron-east-05.cleardb.net',
  user: 'ba8c6efcf34d52',
  password: '23eda3ad',
  database: 'heroku_d087506ec02ec33'
}

var connection;

router.get('/', function(req, res, next) {
  res.render('createEvent');
});

router.post('/', function(req, res) {

  connection = mysql.createConnection(connection_info);


	connection.query("INSERT INTO events VALUES (DEFAULT, '" + req.session.email + "', '" + req.body.location + "', '" + req.body.departure + "', '" + req.body.date + "', '" + req.body.description + "', '" + req.body.passengers + "')", function (err, result) {
		if (err) throw err;


		res.redirect('home');
	});
  connection.end();

  // handle disconnect
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      connection.connect(function(err) {              // The server is either down
        if(err) {                                     // or restarting (takes a while sometimes).
          console.log('error when connecting to db:', err);
          setTimeout(function(){}, 2000); // We introduce a delay before attempting to reconnect,
        }                                     // to avoid a hot loop, and to allow our node script to
      });
    } else {
      throw err;
    }
  });

});

module.exports = router;
