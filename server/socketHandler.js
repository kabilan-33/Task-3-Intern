// Shared in-memory content variable
let content = '';

/**
 * Handles all socket events for a collaborative text document.
 * @param {Socket} socket - The connected client socket.
 * @param {Server} io - The Socket.IO server instance.
 */
function socketHandler(socket, io) {
  console.log(`📡 Client connected: ${socket.id}`);

  // Send the current document content to the newly connected client
  socket.emit('load', content);

  // Listen for edits from this client
  socket.on('edit', (data) => {
    console.log(`✏️ Edit received from ${socket.id}: ${data.slice(0, 30)}...`);
    content = data;

    // Broadcast the updated content to other connected clients (excluding the sender)
    socket.broadcast.emit('update', content);
  });

  // Handle client disconnect
  socket.on('disconnect', () => {
    console.log(`❌ Client disconnected: ${socket.id}`);
  });
}

module.exports = socketHandler;
