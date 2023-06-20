const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    id:{
        type: Number,
        required : true,
        minlength :1,
        trim: true
    },
    date:{
        type: String,
        required : true,
        minlength :1,
        trim: true
    },
    user:{
        type: String,
        required : true,
        minlength :1,
        trim: true
    },
    department:{
        type: String,
        required : true,
        minlength :1,
        trim: true
    },
    software:{
        type: String,
        required : true,
        minlength :1,
        trim: true
    },
    seats:{
        type: Number,
        required : true,
        minlength :1,
        trim: true
    },
    amount:{
        type: Number,
        required : true,
        minlength :1,
        trim: true
    },
    
})

const employee = mongoose.model('employee',employeeSchema);

module.exports = {employee};