const pet = require("../model/Pet")
const userdata = require("../model/user")
var jwt = require('jsonwebtoken');

exports.predic = (req,res) => {
    const token = req.body.userToken
    const userid = jwt.decode(token)
    userdata.findById(userid.userid).then(data => {
        if (data.pet){
            const UserPet = data.pet
            pet.find({type:UserPet}).then(test => {
                if(test[0]){
                    var {salary,style,price} = req.body //รับค่าจากการตอบคำถาม
                    const pipeline = [
                        {
                            '$match': {
                                style: style, 
                                type: test[0].type, 
                                salary: {$lte: Number(salary)}
                            }
                        }
                    ]
                    pet.aggregate(pipeline,function( err, data ) {
                        if ( err ){throw err}
                        else{
                            console.log(data)
                            return res.status(200).json(data);
                        }
                    })
                }
                else
                {
                    var {salary,style,price} = req.body //รับค่าจากการตอบคำถาม
                    pet.find({salary:salary,style:style,price:price}).then(predicted => {
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