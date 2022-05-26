import express from 'express';
import helmet from 'helmet';
// import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import router from './lib/router';
import http from 'http';
import { Server } from 'socket.io';


async function createApp() {
  const app = express();
  const httpServer = http.createServer(app);
  const io = new Server(httpServer);

  //TODO: move to different file
  io.on('connection', (socket) => {
    console.log('User connected');
    
    socket.on('disconnect', () => {
      console.log(`User disconnected!, ${socket}`);
    });
  });

  app.use(express.json());
  app.use(helmet());
  app.use(cors());
  app.use(express.static('dist/app'));
  app.use('/api', router);


  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
  return app;
}

export default createApp;
