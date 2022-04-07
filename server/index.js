const express = require('express');
const path = require('path');
require('./config/db.js');
const { instrument } = require('@socket.io/admin-ui');
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
    // allowedHeaders: ['Access-Control-Allow-Origin'],
  },
  allowEIO3: true,
});

const itemRoutes = require('./routes/itemRoutes');
const userRoutes = require('./routes/userRoutes');
const {
  errorHandler,
  globalErrorHandler,
} = require('./controller/errorHandler');

const port = process.env.PORT || 8080;

app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api', (_req, res) => {
  return res.json({ message: 'You have reached the Lender API' });
});
app.use('/api/items', itemRoutes);
app.use('/api/users', userRoutes);

app.use('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use(errorHandler);
app.use(globalErrorHandler);

instrument(io, { auth: false });

server.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

io.on('connection', socket => {
  console.log('a user connected');

  socket.on('send_message', data => {
    console.log(data);
    socket.emit('receive_message', data);
  });
});

module.exports.app = app;
