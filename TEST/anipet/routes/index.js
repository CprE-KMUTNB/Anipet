var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',enSureAuthentucated, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function enSureAuthentucated(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }else{
    res.redirect('/users/login')
  }
}
module.exports = router;