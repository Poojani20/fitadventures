const express = require('express');

const app = express();

const port=process.env.port || 8080 //this is for server port 

const authRoute = require('./routes/auth-route');

app.use('/auth',authRoute);

app.get('/', (req, res) => {
    res.send("Welcome here 123 :)")
})

app.listen(port,()=>{
    console.log("Node server is connected",port)
})