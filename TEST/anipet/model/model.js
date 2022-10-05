const mongoose = require('mongoose')
const mongo = require('mongodb')
const dbUrl = 'mongodb://localhost:27017/LoginDB'
const bcrypt = require('bcrypt');
const saltRounds = 10;

mongoose.connect(dbUrl,{
    useNewUrlParser:true
})
const db = mongoose.connect
const Schema = mongoose.Schema

const Regis =new Schema({
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

const Blogs = module.exports=mongoose.model("userId",Regis)

module.exports.createBlog= function(newBlock,callback){
    newBlock.save(callback)
}
module.exports.createUser= function(newUser,callback){
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password=hash;
            newUser.save(callback);
        });
    });
}

module.exports.getUserByid= function(id,callback){
    Blogs.findById(id,callback);
}
module.exports.getUserByname= function(name,callback){
    const query={
        name:name
    }
    Blogs.findOne(query,callback);
}
module.exports.getAllPets=function(data){
    Blogs.find(data)
}
module.exports.deleteUser = function(id,callback){
    Blogs.findByIdAndDelete(id,callback)
}

module.exports.getUserid= function(id,callback){
    var query= {
        _id:id
    }
    Blogs.findOne(query,callback)
}

module.exports.updateUser= function(data,callback){
    var query= {
        _id:data.id
    }
    Blogs.findByIdAndUpdate(query,{
        $set:{
            name:data.name,
            username:data.username,
            password:data.password,
            gender:data.gender
        }
    },{new:true},callback)
}