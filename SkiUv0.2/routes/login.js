var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  res.send('Your Email "' + req.body.email + '"' + '\n' + 'Your Password "' + req.body.pwd + '"');
});

module.exports = router;
