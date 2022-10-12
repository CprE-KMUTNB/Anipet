const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Pet =new Schema({
    id:{
        type:Schema.ObjectId
    },
    name:{
        type:String,
        require:true
    },
    info:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    hard:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    salary:{
        type:String,
        require:true
    },
    style:{
        type:String,
        require:true
    },
    enviroment:{
        type:String,
        require:true
    },
    time:{
        type:String,
        require:true
    },
})

module.exports= mongoose.model("animals",Pet)