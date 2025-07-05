const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const socketHandler = require('./socketHandler'); // import socket logic module

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors()); // Allow CORS for client connections

// Create HTTP server
const server = http.createServer(app);

// Attach Socket.IO to HTTP server
const io = new Server(server, {
  cors: {
    origin: '*', // Allow all origins (good for local testing)
    methods: ['GET', 'POST']
  }
});

// Handle new socket connections using our modular handler
io.on('connection', (socket) => socketHandler(socket, io));

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
