var express = require('express');
var router = express.Router();
const Blogs = require('../model/model');
const pet = require('../model/model');
const {check,validationResult} = require('express-validator');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user/index',{data:"Hello mongoose"});
});

router.get('/map', function(req, res, next) {
  res.render('user/map',{data:"Hello mongoose"});
});

router.get('/search', function(req, res, next) {
  pet.getAllAnimal(function(err,blog){
    if(err) throw err
    res.render("user/search",{data:"Hello mongoose",blogs:blog});
  });
});

router.get('/edit/:id', function(req, res, next) {
  Blogs.getUserid([req.params.id],function(err,blog){
    if(err) throw err
    res.render("user/edit",{data:"แก้ไข",blog:blog})
  })
});

router.get('/register', function(req, res, next) {
  res.render('Register/register',{data:"สมัครสมาชิก"})
});

router.get('/login', function(req, res, next) {
  res.render('Login/login',{data:"เข้าสู่ระบบ"});
});
router.get('/logout', function(req, res, next) {
  req.logout(function(err){
    if(err) throw err
    res.redirect('/users/login');
  });
});

router.post('/login',passport.authenticate('local',{
  failureRedirect:'/users/login',
  failureFlash:true
}), 
function(req, res) {
  req.flash("success","ลงชื่อเข้าใช้เรียบร้อย");
  res.redirect('/');
});
passport.serializeUser(function(user, done) {
  done(null,user._id)
});
passport.deserializeUser(function(id,done){
  Blogs.getUserByid(id,function(err,user){
    done(err,user)
  });
});
passport.use(new LocalStrategy(function(username,password,done){
  Blogs.getUserByname(username,function(err,user){
    console.log(user)
    if(err) throw err
    if(!user){
      //ไม่พบผู้ใช้ในระบบ
      return done(null,false)
    }
    else{
      Blogs.comparePassword(password,user.password,function(err,isMatch){
        if(err) throw err
        if(isMatch){
          return done(null,user)
        }
        else{
          return done(null,false)
        }
      });
    }
  });
}));

router.post('/search',function(req,res,next){
  person = req.body.name
  pet.searchAnimal(person,function(err,data){
    console.log(data)
    try{
      typedata = data[0].type
      res.render("user/search",{data:person,blogs:data});
    }catch{
      if(err) throw err
      pet.searchAnimalType(person,function(err,typepet){
        if(err) throw err
        res.render("user/search",{data:person,blogs:typepet})
      })
    }
  })
})

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