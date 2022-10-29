const pet = require("../model/Pet")
const peturl = require("../model/ImagePet")

exports.search = (req,res) => {
    const {type} = req.body
    const {min,max} = req.body
    const pipeline1 = [
        {
            '$match': {
                'salary': {
                '$gt': Number(min), 
                '$lte': Number(max)
                }
            }
        }
    ]
    pet.aggregate(pipeline1,function( err, data ) {
        if ( err ){throw err}
        else{
            if(type){
                const pipeline2 = [
                    {
                        '$match': {
                            salary: {
                            '$gt': Number(min), 
                            '$lte': Number(max)
                            },
                            type:type
                        }
                    }
                ]
                pet.aggregate(pipeline2,function( err, ComAnimal ) {
                    if ( err ){throw err}
                    else{
                        
                        console.log(ComAnimal)
                        return res.status(200).json(ComAnimal);
                    }
                })
            }
            else{
                console.log(data)
                return res.status(200).json(data);
            }
        }
    })
}