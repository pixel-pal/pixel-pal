import express from 'express';
import helmet from 'helmet';
// import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import router from './lib/router';
import http from 'http';
import { Server, Socket } from 'socket.io';
const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(express.static('dist/app'));
app.use('/api', router);
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});
io.on('connection', (socket: Socket) => {
  console.log('User connected!');
  socket.on('draw', (canvas) => {
    socket.emit('newCanvas', {canvas})
  })
  socket.on('disconnect', () => {
    io.emit('message', 'A user has left');
    // console.log(`User disconnected!, ${socket}`);
  });
});
const PORT = 3001;
httpServer.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});