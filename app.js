const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const {mongoose} = require('./db/mongoose');
const {employee} = require('./db/employee.model');

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/user', (req,res)=>{
    let {id} = req.body;
    console.log(id);
    try {
        const result =  employee.findOne({ id : parseInt(id) });
        if(result){
            console.log(result);
            res.json({result});
        }else{
            res.json(404).json({error:"user not found"});
        }
    }catch(error){
        res.status(500).json({error:"An error occured"});;
    }
})

app.listen(3000,() => {
    console.log("server is running on PORT 3000");
})
