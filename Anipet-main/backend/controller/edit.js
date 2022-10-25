const userdata = require("../model/user")
var jwt = require('jsonwebtoken');

exports.update = (req,res) =>{
    const token = req.body.token
    const userid = jwt.decode(token)
    if(!userid){
        return res.status(400)
    }else{
        userdata.findById(userid.userid).then(userInfo => {
            userdata.findByIdAndUpdate(userid.userid,{
                $set:{
                    name : req.body.name || userInfo.name,
                    gender : req.body.gender || userInfo.gender
                }
            }).then(user => {
                return res.status(200).json(user)
            })
        })
    }
}