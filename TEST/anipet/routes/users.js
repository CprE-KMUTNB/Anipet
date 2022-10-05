var express = require('express');
var router = express.Router();
const Blogs = require('../model/model');
const {check,validationResult} = require('express-validator');
const passport = require('passport');
const { response } = require('../app');
const LocalStrategy = require('passport-local').Strategy

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
  res.render('Register/register',{data:"สมัครสมาชิก"})
});

router.get('/login', function(req, res, next) {
  res.render('Login/login',{data:"สมัครสมาชิก"});
});

router.post('/login',passport.authenticate('local',{
  failureRedirect:'/users/login',
  failureFlash:false
}), function(req, res) {
  res.redirect('/');
});

passport.serializeUser(function(user,done){
  done(null,user.id)
});
passport.deserializeUser(function(id,done){
  Blogs.getUserByid(id,function(err,user){
    done(err,user)
  });
});

passport.use(new LocalStrategy(function(username,password,done){
  Blogs.getUserByname(username,function(err,user){
    if(err) throw err
    console.log(user);
  });
}));

router.post('/register',[
  check('name','name is require').not().isEmpty(),
  check('username','username is require').not().isEmpty(),
  check('password','password is require').not().isEmpty(),
], function(req, res, next) {
  const result= validationResult(req);
  var errors = result.errors;
  for (var key in errors) {
        console.log(errors[key].value);
  }
  if (!result.isEmpty()) {
  //ใส่ข้อมูลไม่ครบ
    res.render("Register/register",{data:"สมัครสมาชิก",errors:errors})
  }else{
    user =new Blogs({
      name:req.body.name,
      username:req.body.username,
      password:req.body.password,
      gender:req.body.gender
    })
    Blogs.createUser(user,function(err){
      if(err) console.log(err);
      res.redirect("/")
    })
  }
  
});
module.exports = router;
