const mongoose = require('mongoose')
const mongo = require('mongodb')
const dbUrl1 = 'mongodb://localhost:27017/Anipet'
const dbUrl2 = 'mongodb://localhost:27017/Anipet'
const bcrypt = require('bcrypt');
const saltRounds = 10;

const conn = mongoose.createConnection(dbUrl1, {useNewUrlParser:true})
const conn2 = mongoose.createConnection(dbUrl2, {useNewUrlParser:true})
mongoose.connect(dbUrl1,{
    useNewUrlParser:true
})
const db = mongoose.connect
const Schema = mongoose.Schema

const Regis =new Schema({
    id:{
        type:Schema.ObjectId
    },
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
})

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
})

const Blogs = module.exports= conn.model("userId",Regis)
const pet = module.exports= conn2.model("animals",Pet)

module.exports.searchAnimal=function(data,callback){
    var query= {
        name:data
    }
    pet.find(query,callback)
}

module.exports.searchAnimalType=function(data,callback){
    var query= {
        type:data
    }
    pet.find(query,callback)
}

module.exports.getSalaryAnimal=function(data,callback){
    var query= {
        salary:data
    }
    pet.find(query,callback)
}

module.exports.getAllAnimal=function(data){
    pet.find(data)
}

module.exports.getAnimalId=function(id,callback){
    pet.findById(id,callback)
}
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

module.exports.getUserByname= function(username,callback){
    var query={
        username:username
    }
    Blogs.findOne(query,callback);
}

module.exports.comparePassword= function(password,hash,callback){
    bcrypt.compare(password,hash,function(err,isMatch){
        callback(null,isMatch);
    });
}
module.exports.searchUser=function(data,callback){
    var query= {
        name:data
    }
    Blogs.find(query,callback)
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

module.exports.getUsername= function(name,callback){
    var query= {
        name:name
    }
    Blogs.findOne(query,callback)
}

module.exports.getName= function(username,callback){
    var query= {
        username:username
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