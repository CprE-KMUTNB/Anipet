var express = require('express');
var router = express.Router();
const {login,logout} = require("../controller/login")

router.post('/login',login);

router.delete('/logout',logout);

module.exports = router