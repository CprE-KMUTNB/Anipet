const passport = require('passport');
const { response } = require('../app');
const LocalStrategy = require('passport-local').Strategy

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
  
  passport.use(new LocalStrategy(function(name,password,done){
    Blogs.getUserByname(name,function(err,user){
      if(err) throw err
      console.log(user);
    });
  }));