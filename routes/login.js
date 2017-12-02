var express = require('express');
var router = express.Router();

var mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'us-cdbr-iron-east-05.cleardb.net',
  user: 'ba8c6efcf34d52',
  password: '23eda3ad',
  database: 'heroku_d087506ec02ec33'
});

router.post('/', function(req, res) {
  var email= req.body.email.toString();
  var password = req.body.pwd;

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


  // Checks for user in database
  connection.query('SELECT * FROM user_info WHERE username = "' + email + '";', function (err, rows, fields) {
    if (err) throw err;
      if(rows.length >0){
        if(rows[0].password == password){
          //res.send('Your Email "' + email + '"' + '\n' + 'Your Password "' + password + '". Succesful Login');

          // Assigning session variables to indicate that user is logged in
          
          
          
          var sess = req.session;
          sess.loggedIn = true;
          sess.email=email;
          sess.first_name=rows[0].first_name;
          sess.last_name=rows[0].last_name;
          
          res.redirect('/home');

          
        }
        else{
          res.send("Email and password does not match");
        }
      }
      else{
        res.send("Email does not exist");
      }
  });

});


module.exports = router;
