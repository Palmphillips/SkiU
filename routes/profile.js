var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Sou91599!!',
  database : 'SkiU'
});

// edit links so that user must go to skiu.com/profile?user=blah

router.get('/', function(req, res, next) {
  email = req.query.user

  connection.query('SELECT * FROM user_info WHERE username = "' + email + '";', function (err, rows, fields) {
    if (err) throw err;
      if(rows.length>0){
        // if (email == req.session.email) {
        //   res.send('this profile is yours');
        // }
        // else {
        //   res.send('this profile is somebody elses')
        // }
        res.render("profile", {
          name:rows[0].username,
          items : ['red', 'green']
        });
      }
      else{
        //send 404 error
        res.render('error');
      }
  });
});

module.exports = router;
