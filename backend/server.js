var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var db = mongoose.connection;
var bcrypt = require('bcryptjs');
var Register = require('./routes/register');
var Login = require('./routes/login');
var Search = require('./routes/search');
const session = require('express-session');

require("dotenv").config();
var app = express();

//connect database
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:false
}).then(()=>{
    console.log("DBconnected")
}).catch((err)=>{
    console.log(err)
});

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`Start server in port ${port}`);
})

app.use(express.json());
app.use('/api',Register);
app.use('/api',Login);
app.use('/api',Search);
