const userdata = require("../model/user")
var jwt = require('jsonwebtoken');

exports.Delete = (req,res) =>{
    const token = req.body.userToken
    const userid = jwt.decode(token)
    if(!userid){
        return res.status(400)
    }else{
        userdata.findById(userid.userid).then(userInfo => {
            if(userInfo){
                userdata.findByIdAndDelete(userid.userid)
                .then(user => {
                    return res.status(200).json("Finish");
                })
            }
            else{
                return res.json("delete fail")
            }
        })
        
    }
}
