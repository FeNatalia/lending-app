const express = require('express');
const path = require('path');
require('./config/db.js');
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);
const { Server } = require('socket.io');

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

const itemRoutes = require('./routes/itemRoutes');
const userRoutes = require('./routes/userRoutes');
const {
  errorHandler,
  globalErrorHandler,
} = require('./controller/errorHandler');

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api', (_req, res) => {
  return res.json({ message: 'You have reached the Lender API' });
});
app.use('/api/items', itemRoutes);
app.use('/api/users', userRoutes);

io.on('connection', socket => {
  console.log('a user connected');

  socket.emit('message', {
    text: ` has joined the chat`,
  });
});

app.use('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use(errorHandler);
app.use(globalErrorHandler);

server.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports.app = app;
