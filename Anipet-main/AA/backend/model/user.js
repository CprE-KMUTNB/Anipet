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
        unique:true
    },
    name:{
        type:String,
        require:true,
    },
    gender:{
        type:String,
        require:true
    },
})

module.exports= mongoose.model("userId",User)