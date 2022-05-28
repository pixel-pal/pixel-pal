import express from 'express';
import helmet from 'helmet';
// import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import router from './lib/router';
import errorHandler from './lib/utils/errorHandling';

async function createApp() {
  const app = express();
  app.use(express.json());
  app.use(helmet());
  app.use(cors());
  app.use(express.static('dist/app'));
  app.use('/api', router);

  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'app/index.html'));
  });

  app.use(errorHandler);

  return app;
}

export default createApp;
