var express = require('express');
var router = express.Router();

// edit links so that user must go to skiu.com/profile?user=blah

router.get('/', function(req, res, next) {
  //res.render('profile');
  if (req.query.user == req.session.email) {
    res.send('this profile is yours');
  }
  else {
    res.send('this profile is somebody elses')
    //res.redirect('/home');
  }
});

module.exports = router;
