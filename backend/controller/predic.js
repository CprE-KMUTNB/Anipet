const pet = require("../model/Pet")
const userdata = require("../model/user")
var jwt = require('jsonwebtoken');

exports.predic = (req,res) => {
    const token = req.body.userToken
    const userid = jwt.decode(token)
    userdata.findById(userid.userid).then(data => {
        if (data.pet){
            const UserPet = data.pet
            pet.find({name:UserPet}).then(test => {
                if(test[0]){
                    console.log(test[0].type)
                    var {salary,style} = req.body //รับค่าจากการตอบคำถาม
                    pet.find({salary:salary,style:style,type:test[0].type}).then(predicted => {
                        if(!predicted[0]){
                            return res.status(400).json({error:"fail"})
                        }else
                            return res.status(200).json(predicted)
                        }
                    )
                }
                else
                {
                    var {salary,style} = req.body //รับค่าจากการตอบคำถาม
                    pet.find({salary:salary,style:style}).then(predicted => {
                        if(!predicted[0]){
                            return res.status(400).json({error:"fail"})
                        }else
                            return res.status(200).json(predicted)
                        }
                    )
                }
            })
        }
    })
}