var express = require('express');
var router = express.Router();

var mysql = require('mysql');
const bcrypt = require('bcrypt');

var connection_info = {
  host: 'tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'o7g1pc8gw1nmeehm',
  password: 'gbgqf33r8bj4bqzj',
  database: 'qpb8oulw3o6oklee'
};

var connection;

router.get('/', function(req, res, next) {
  res.render('registration');
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
  // Tests inputs using Regular Expressions
  // var emailRe = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  // var coloradoEmailRe = /.*/;
  // if(!emailRe.test(req.body.email) && !coloradoEmailRe.test(req.body.email)){
  //   window.alert('Please enter in a valid colorado.edu email address.');
  // }
  // var passwordRe = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
  // if(!passwordRe.test(req.body.password)){
  //   window.alert('Please enter in a valid password.');
  // }
  // // First name and last name with only letters and less than 20 characters long
  // var fnameRe = /[a-zA-Z]{1,20}/;
  // if(!fnameRe.test(req.body.fname)){
  //   window.alert('Please enter in a valid first name.');
  // }
  // var lnameRe = /[a-zA-Z]{1,20}/;
  // if(!lnameRe.test(req.body.lname)){
  //   window.alert('Please enter in a valid last name.');
  // }
  // // North american phone number regex
  // var phoneRe = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  // if(!phoneRe.test(req.body.phone)){
  //   window.alert('Please enter in a valid US phone number.');
  // }
  // // Digit less than 4 letters
  // var yearRe = /^\d{4}$/;
  // if(!yearRe.test(req.body.year)){
  //   window.alert('Please enter in a valid graduation year.');
  // }

  connection = mysql.createConnection(connection_info);

  bcrypt.hash(req.body.password, 10, function(err, hash) {
    // Store hash in database
    connection.query("INSERT INTO user_info VALUES ('" + req.body.email + "', '" + hash + "', '" + req.body.fname + "', '" + req.body.lname + "', '" + req.body.phone + "', '" + req.body.year + "', '', '', '', '', '', '' )", function (err, result) {
  		if (err) throw err;

      // Assigning session variables to indicate that user is logged in
      var sess = req.session;
      sess.loggedIn = true;
      sess.email=req.body.email;
      sess.first_name=req.body.fname;
      sess.last_name=req.body.lname;

  		res.redirect('home');
  	});
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
