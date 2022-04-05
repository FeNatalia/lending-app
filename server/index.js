const express = require('express');
const path = require('path');
require('./config/db.js');
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);
const { Server } = require('socket.io');

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    transports: ['websocket', 'polling'],
    allowedHeaders: ['Access-Control-Allow-Origin'],
  },
  allowEIO3: true,
});

const itemRoutes = require('./routes/itemRoutes');
const userRoutes = require('./routes/userRoutes');
const {
  errorHandler,
  globalErrorHandler,
} = require('./controller/errorHandler');

const { PORT } = process.env || 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api', (_req, res) => {
  return res.json({ message: 'You have reached the Lender API' });
});
app.use('/api/items', itemRoutes);
app.use('/api/users', userRoutes);

io.on('connection', socket => {
  console.log('a user connected:', socket.id);

  socket.on('chat', text => {
    console.log('here is the text', text);
    socket.emit('message', text);
  });
});

app.use('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use(errorHandler);
app.use(globalErrorHandler);

server.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

module.exports.app = app;
