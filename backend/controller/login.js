const userdata = require("../model/user")
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

exports.login = (req,res) => {
    var {username,password} = req.body
    userdata.findOne({username}).then(user => {
        console.log(user)
        if(!user){
            return res.status(400).json({error:"not have this user"})
        }else{
            bcrypt.compare(password,user.password).then(result =>{
                if(!result){
                    return res.status(400).json({error:"wrong password"})
                }else{
                    const token = jwt.sign({userid:user._id},process.env.TOKENSECRET)
                    return res.status(200).json({token})
                }
            })
        }
    })
}

exports.logout = (req,res) =>{
    const token = req.body
    //const newToken = jwt.Verify(token => token !== req.body.token)
    return res.status(200).json("faile")
}