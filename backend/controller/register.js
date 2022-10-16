const userdata = require("../model/user")
const bcrypt = require('bcryptjs');
const saltRounds = 10;

exports.register = (req,res)=>{
    //นำข้อมูลมาใช้
    var password = req.body.password
    switch(true){
        case !req.body.name:
            return res.json("need name")
        case !req.body.username:
            return res.json("need username")
        case !password:
            return res.json("need password")
    }
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            password=hash;
            const data = {
                name:req.body.name,
                username:req.body.username,
                password:password,
                gender:req.body.gender
            }
            userdata.create(data,(err)=>{
                if(err) {
                    return res.status(400).json({error:"already have username"})
                }
                return res.status(200).json("Register finish")
            })
        });
    });
}