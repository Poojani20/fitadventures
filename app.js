const express = require('express');

const app = express();

const port=process.env.port || 8080 //this is for server port 

app.get('/', (req, res) => {
    res.send("Welcome here :)")
})

app.listen(port,()=>{
    console.log("Node server is connected",port)
})