var express = require('express');
var router = express.Router();
const Blogs = require('../model/model')

router.get('/', function(req, res, next) {
    res.render("blog/index",{data:"Hello mongoose"});
});

router.get('/add', function(req, res, next) {
  res.render("blog/addId",{data:"สมัครสมาชิก"})
});
  
module.exports = router;  