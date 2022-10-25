const userdata = require("../model/user")
var jwt = require('jsonwebtoken');

exports.update = (req,res) =>{
    const token = req.body.token
    const userid = jwt.decode(token)
    if(!userid){
        return res.status(400)
    }else{
        userdata.findByIdAndUpdate(userid.userid,{
            $set:{
                name : req.body.name || user.name,
                gender : req.body.gender || user.gender
            }
        }).then(user => {
            res.status(200).json(user)
        })
    }
}