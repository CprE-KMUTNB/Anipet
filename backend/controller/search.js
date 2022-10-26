const pet = require("../model/Pet")

exports.search = (req,res) => {
    const {name} = req.body
    pet.find({name:{$regex:name}}).then(animal =>{
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