const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const socketio = require('socket.io');
const formatMessage = require('../fitadventures/fullstackproject/src/app/utils/messages');
const {userJoin, getCurrentUser, userLeave, getRoomUsers} = require ('../fitadventures/fullstackproject/src/app/utils/users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//set static folder
app.use(express.static(path.join(__dirname, 'pages')));

const botName = 'Fit Mates';

//run when client connects
io.on("connection", (socket) => {
    console.log(io.of("/").adapter);
    socket.on("joinRoom", ({ username, room }) => {
      const user = userJoin(socket.id, username, room);
  
      socket.join(user.room);

         //welcome current user

         socket.broadcast.to(user.room).emit(
           "message",
           formatMessage(botName, `${user.username} has joined the chat`)
         ); // for one client

    //broadcast when a user connets
    socket.broadcast.emit('message', formatMessage (botName, 'A user has joined the chat'));

    });

    //listen for chatmessage
    socket.on("chatMessage", (msg) => {
        const user = getCurrentUser(socket.id);
    
        io.to(user.room).emit("message", formatMessage(user.username, msg));
      });

    //runs when client disconnets
    socket.on("disconnect", () => {
        const user = userLeave(socket.id);
    
        if (user) {
          io.to(user.room).emit(
            "message",
            formatMessage(botName, `${user.username} has left the chat`)
          );

          // Send users and room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
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