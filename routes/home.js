var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  //res.send("Your email: " + req.session.email);
  res.render('home');

  // Instead of app.get logout, have button that logs you out
  
});

router.get('/logout',function(req,res){
    req.session.destroy(function(err) {
        if(err) {
          console.log(err);
        } else {
          res.render('/');
        }
      });
    });


module.exports = router;
