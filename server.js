//server.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const app = express();
const server =http.createServer(app);
const io = socketIO(
    server,
    {
        cors:{
            origin:'http://localhost:3000',
            methods:['GET','POST'],
         },
    }
);

app.get('/',(req,res)=>{
    res.send('Sylvanas for Warchief');
});

io.on('connection',(socket)=>{
    console.log('user connected');
    socket.on('message',(msg)=>{
    io.emit('message',msg);
    });
    socket.on('disconnect',()=>{
        console.log('user disconnected');
        });
});


const PORT = process.env.PORT || 3001;
server.listen(PORT,()=>console.log(`server running on http://localhost: ${PORT}`));