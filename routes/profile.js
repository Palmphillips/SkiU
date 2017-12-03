var express = require('express');
var router = express.Router();

var mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'us-cdbr-iron-east-05.cleardb.net',
  user: 'ba8c6efcf34d52',
  password: '23eda3ad',
  database: 'heroku_d087506ec02ec33'
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
          first_name:rows[0].first_name,
          last_name:rows[0].last_name,
          email:rows[0].username,
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
