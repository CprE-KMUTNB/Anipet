router.post('/login',passport.authenticate('local',{
    successRedirect:'/',
    failureRedirect:'/users/login',
    failureFlash:false
  }), 
  function(req, res) {
    res.redirect('/');
  });
passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      cb(null, { id: user.id, username: user.username});
    });
  });
  passport.deserializeUser(function(id,done){
    Blogs.getUserByid(id,function(err,user){
      done(err,user)
    });
  });