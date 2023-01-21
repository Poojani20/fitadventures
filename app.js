const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//set static folder
app.use(express.static(path.join(__dirname, 'pages')));

//run when client connects
io.on('connection', socket =>{
    console.log('New web socket connection !!');

    //welcome current user

    socket.emit('message','Welcome to Chat with mates!'); // for one client

    //broadcast when a user connets
    socket.broadcast.emit('message', 'A user has joined the chat');

    //runs when client disconnets
    socket.on('disconnect', () => {
        io.emit('message', 'A user has left the chat');
    });

    //listen for chatmessage
    socket.on('chatMessage', msg => {
       io.emit('message', msg);
    });
});

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