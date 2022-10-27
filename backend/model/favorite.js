const mongoose = require("mongoose")
const Schema = mongoose.Schema

const favorite =new Schema({
    id:{
        type:Schema.ObjectId
    },
    name:{
        type:String,
        require:true
    },
    petName:{
        type:String,
        require:true
    },
})

module.exports= mongoose.model("favorites",favorite)