var express = require('express');
var router = express.Router();
const Blogs = require('../model/model')

router.get('/', function(req, res, next) {
    res.render("blog/index",{data:"Hello mongoose"});
});

router.get('/add', function(req, res, next) {
  res.render("blog/addId",{data:"สมัครสมาชิก"})
});
router.post('/add', function(req, res, next) {
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
});
module.exports = router;  