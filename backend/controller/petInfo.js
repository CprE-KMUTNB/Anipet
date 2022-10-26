const pet = require("../model/Pet")
const peturl = require("../model/ImagePet")
var jwt = require('jsonwebtoken');

exports.info = (req,res) => {
    const {name} = req.body
    peturl.find({name:name}).then(animal =>{
        if(!animal[0])
        {
            return res.json({result:"not found that "})
        }
        else
        {
            const pipeline = 
            [
                {
                '$match': {
                    'name': name
                }
                }, {
                '$addFields': {
                    'url': animal[0].url
                }
                }
            ]
            pet.aggregate(pipeline,function( err, data ) {
                if ( err ){throw err}
                else{
                    return res.status(200).json(data[0]);
                }
              })
            console.log(animal)
        }
    })
}