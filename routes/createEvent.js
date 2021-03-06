var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var connection_info = {
  host: 'tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'o7g1pc8gw1nmeehm',
  password: 'gbgqf33r8bj4bqzj',
  database: 'qpb8oulw3o6oklee'
};

var connection;

router.get('/', function(req, res, next) {
  res.render('createEvent');
  connection.on('error', function(err) {
    // console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      connection.connect(function(err) {              // The server is either down
        if(err) {                                     // or restarting (takes a while sometimes).
          // console.log('error when connecting to db:', err);
          setTimeout(function(){}, 2000); // We introduce a delay before attempting to reconnect,
        }                                     // to avoid a hot loop, and to allow our node script to
      });
    } else {
      throw err;
    }
  });
});

router.post('/', function(req, res) {

  connection = mysql.createConnection(connection_info);

  
	connection.query("INSERT INTO events VALUES (DEFAULT, '" + req.session.email + "', '" + req.body.location + "', '" + req.body.departure + "', '" + req.body.date + "', '" + req.body.description + "', '" + req.body.passengers + "');", function (err, result) {
		if (err) throw err;
	});
  connection.query("UPDATE user_info SET events=(CONCAT((SELECT events FROM (SELECT * FROM user_info) AS t1 WHERE username='" + req.session.email + "'), CAST(LAST_INSERT_ID() as CHAR(100)), ', ')) WHERE username='" + req.session.email + "';", function (err, result) {
      if (err) throw err;
      res.redirect('home');
  });

  // connection.end();
  // connection.end({ timeout: 60000000 });

  // handle disconnect
  connection.on('error', function(err) {
    // console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      connection.connect(function(err) {              // The server is either down
        if(err) {                                     // or restarting (takes a while sometimes).
          // console.log('error when connecting to db:', err);
          setTimeout(function(){}, 2000); // We introduce a delay before attempting to reconnect,
        }                                     // to avoid a hot loop, and to allow our node script to
      });
    } else {
      throw err;
    }
  });

});

module.exports = router;
;