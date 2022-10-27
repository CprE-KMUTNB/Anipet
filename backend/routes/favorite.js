var express = require('express');
var router = express.Router();
const {favorites, Disfavorites,checksfavorites} = require("../controller/favorite");

router.post("/favorite",favorites)
router.post("/disfavorite",Disfavorites)
router.post("/checkfavorite",checksfavorites)

module.exports = router
