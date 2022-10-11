const userdata = require("../model/user")
const bcrypt = require('bcryptjs');
var {sign} = require('jsonwebtoken');

exports.login = (req,res) => {
    var {username,password} = req.body
    userdata.findOne({username}).then(user => {
        console.log(user)
        if(!user){
            return res.status(400).json({error:"not have this user"})
        }else{
            bcrypt.compare(password,user.password).then(result =>{
                if(!result){
                    return res.status(400).json({error:"worng password"})
                }else{
                    const token = sign({userid:user._id},process.env.TOKENSECRET)
                    return res.status(200).json({token})
                }
            })
        }
    })
}