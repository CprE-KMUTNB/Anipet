var express = require('express');
var router = express.Router();
const Blogs = require('../model/model')
const {check,validationResult} = require('express-validator')

router.get('/', function(req, res, next) {
  Blogs.getAllPets(function(err,blog){
    if(err) throw err
    res.render("blog/index",{data:"Hello mongoose",blogs:blog});
  });
});

router.get('/add', function(req, res, next) {
  res.render("blog/addId",{data:"สมัครสมาชิก"})
});

router.get('/delete/:id', function(req, res, next) {
  Blogs.deleteUser([req.params.id],function(err){
    if(err) throw err
    res.redirect("/blogs")
  })
});

router.get('/edit/:id', function(req, res, next) {
  Blogs.getUserid([req.params.id],function(err,blog){
    if(err) throw err
    res.render("blog/editform",{data:"แก้ไข",blog:blog})
  })
});

router.get('/login', function(req, res, next) {
  res.render("blog/login",{data:"เข้าสู่ระบบ"})
});

router.post('/add',[
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
    res.render("blog/addId",{data:"สมัครสมาชิก",errors:errors})
  }else{
    data =new Blogs({
      name:req.body.name,
      username:req.body.username,
      password:req.body.password,
      gender:req.body.gender
    })
    Blogs.createBlog(data,function(err){
      if(err) console.log(err);
      res.redirect("/blogs")
    });
  }
  
});

router.post('/update',[
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
    res.redirect("/blogs")
  }else{
    data =new Blogs({
      id:req.body.id,
      name:req.body.name,
      username:req.body.username,
      password:req.body.password,
      gender:req.body.gender
    })
    Blogs.updateUser(data,function(err){
      if(err) console.log(err);
      res.redirect("/blogs")
    });
  }
  
});
module.exports = router;  