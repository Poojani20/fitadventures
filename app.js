const express = require('express');

const app = express();

const port=process.env.port || 8080 //this is for server port 

const authRoute = require('./routes/auth-route');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fitadventures',(err) =>{
    if(err){
        console.log("Database is not connected")
    }else{
        console.log("Database is connected...");
    }
});


app.use('/auth',authRoute);

app.get('/', (req, res) => {
    res.send("Welcome here 123 :)")
})

app.listen(port,()=>{
    console.log("Node server is connected",port)
})