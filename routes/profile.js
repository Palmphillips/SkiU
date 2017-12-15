var express = require('express');
var router = express.Router();

var mysql = require('mysql');

// Always go to skiu.com/profile?user=username

var connection_info = {
  host: 'tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'o7g1pc8gw1nmeehm',
  password: 'gbgqf33r8bj4bqzj',
  database: 'qpb8oulw3o6oklee'
};

var connection;

router.get('/', function(req, res, next) {

  connection = mysql.createConnection(connection_info);

  var username;
  if (req.query.user) {
    username = req.query.user;
  }
  else if (req.session.email){
    username = req.session.email;
  }
  else {
    res.redirect("/");
  }
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
          age: rows[0].age,
          bio: rows[0].bio,
          rider_type: rows[0].rider_type,
          preferred_terrain: rows[0].preferred_terrain,
          picture_url: rows[0].picture_url,
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
      //send 404 error
      res.render('error', {
        description: "404: Username not found."
      });
    }
  });

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
