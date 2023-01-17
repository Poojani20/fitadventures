const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const port=process.env.port || 8080 //this is for server port 

const authRoute = require('./routes/auth-route');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/fitadventures',(err) =>{
    if(err){
        console.log("Database is not connected")
    }else{
        console.log("Database is connected...");
    }
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())


app.use('/auth',authRoute);

app.get('/', (req, res) => {
    res.send("Welcome here 123 :)")
})

app.listen(port,()=>{
    console.log("Node server is connected",port)
})