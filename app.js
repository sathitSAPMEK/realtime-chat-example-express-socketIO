const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// socket connection
io.on('connection', (socket) => {
    // receive message from socket event
    socket.on('chat message', (msg) => {
        // send message to client socket
      io.emit('chat message', msg);
    });
  });

server.listen(3001, () => {
  console.log('listening on :3001');
});