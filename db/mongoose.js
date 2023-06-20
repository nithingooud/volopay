const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/volopay',{useNewUrlParser:true}).then(()=>{
    console.log("connexted to mongodb successfully");
}).catch((e)=>{
    console.log("error while connecting to mongodb");
})

module.exports={
    mongoose
}