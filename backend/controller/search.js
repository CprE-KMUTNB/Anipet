const pet = require("../model/Pet")
const peturl = require("../model/ImagePet")

exports.search = (req,res) => {
    const {name} = req.body
    const {price} = req.body
    pet.find({name:{$regex:`${price}`}}).then(animal =>{
        if(!animal[0])
        {
            return res.json({result:"not found that "})
        }
        else
        {
            return res.status(200).json(animal)
        }
    })
}