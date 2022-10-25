var express = require('express');
var router = express.Router();
const {Delete} = require("../controller/delete")

router.delete("/delete",Delete);

module.exports = router