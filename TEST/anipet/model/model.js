const mongoose = require('mongoose')
const mongo = require('mongodb')
const dbUrl = 'mongodb://localhost:27017/BlogDB'
    
mongoose.connect(dbUrl,{
    useNewUrlParser:true
})
const db = mongoose.connect
const Schema = mongoose.Schema

const blogSchema =new Schema({
    id:{
            type:Schema.ObjectId
    },
    name:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
})
const Blogs = module.exports=mongoose.model("userId",blogSchema)
module.exports.createBlog= function(newBlock,callback){
    newBlock.save(callback)
}