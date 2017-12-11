var express = require('express');
var router = express.Router();

var mysql = require('mysql');

// Always go to skiu.com/profile?user=username

var connection_info = {
  host: 'us-cdbr-iron-east-05.cleardb.net',
  user: 'ba8c6efcf34d52',
  password: '23eda3ad',
  database: 'heroku_d087506ec02ec33'
}

var connection;

router.get('/', function(req, res, next) {

  connection = mysql.createConnection(connection_info);

  username = req.query.user;
  console.log(username);

  connection.query('SELECT * FROM user_info WHERE username = \"' + username + '\";', function (err, rows, fields) {
    if (err) throw err;
    if(rows.length>0){
      email = rows[0].username;
      if (email == req.session.email) {
        res.render("profile", {
          username: email,
          first_name: rows[0].first_name,
          last_name: rows[0].last_name,
          phone: rows[0].phone,
          school_year: rows[0].school_year,
          my_profile: true
        });
        // TODO: If they have connected with that person (are their driver or passenger) they can see phone number + school year, but otherwise cannot
        // TODO: Display events they have with you
        // put below in html
        // res.send('Welcome to your profile!');
        // res.render('profile');
      }
      else {
        res.render("profile", {
          username: email,
          first_name: rows[0].first_name,
          last_name: rows[0].last_name,
          phone: rows[0].phone,
          school_year: rows[0].school_year,
          my_profile: true
        });

      }
    }
    else{
      // TODO: Username wasn't found error
      //send 404 error
      res.render('error');
    }
  });

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
