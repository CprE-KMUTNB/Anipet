const pet = require("../model/Pet")

exports.predic = (req,res) => {
    var {salary,style,environment,time} = req.body
    pet.find({salary,style,environment,time}).then(predicted => {
        if(!predicted[0]){
            return res.status(400).json({error:"fail"})
        }else
            return res.status(200).json(predicted)
        }
    )
}