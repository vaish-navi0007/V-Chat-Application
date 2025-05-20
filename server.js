/**const express = require("express");

const app = express();

const http = require("http").createServer(app);
const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use(express.static(__dirname +'/public'))

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

const io = require("socket.io")(http);

const users = {};
  

io.on('connection', (socket) => {   // when io.on listen the new request then socket.io runs according to the situation
    console.log('Connected');


    socket.on('new-user-joined', name => {
        console.log("New User", name);
        users[socket.id] = name;    // it gives a unique to the user 
        
        socket.broadcast.emit('user-joined', name);   // Priyanka has joined the chat send message to all except Priyanka
    });
    
    // socket.on ye events hote hai
    socket.on('send', message => {
        socket.broadcast.emit('receive', {message: message, name: users[socket.id]});
    });

    socket.on('disconnect', message => {
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    })
})**/
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg);
    });
});

http.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
