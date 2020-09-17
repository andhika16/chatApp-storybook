const express = require('express');
const app = express();
const http = require('http');
const PORT = 3000 || process.env.PORT
const path = require('path');
const socketio = require('socket.io');
const server = http.createServer(app)
const io = socketio(server)

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// run when user connection
io.on('connection', socket => {
    console.log('New socket connetion');
});

server.listen(PORT, () => console.log(`server connection on port ${PORT}`))