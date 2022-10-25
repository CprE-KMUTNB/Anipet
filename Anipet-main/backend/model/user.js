const mongoose = require("mongoose")
const Schema = mongoose.Schema

const User =new Schema({
    id:{
        type:Schema.ObjectId
    },
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    pet:{
        type:String,
        require:true
    },
})

module.exports= mongoose.model("userId",User)