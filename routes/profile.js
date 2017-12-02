var express = require('express');
var router = express.Router();

// edit so that user must go to skiu.com/prfile/USERNAME

router.get('/', function(req, res, next) {
  res.render('profile');
});

module.exports = router;
