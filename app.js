const express = require('express');

const app = express();

const port=process.env.port || 8080 //this is for server port 

app.listen(port,()=>{
    console.log("Node server is connected",port)
})