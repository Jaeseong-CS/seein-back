import 'dotenv-safe/config';

import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { json, urlencoded } from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

import router from './routes/index';

require('console-stamp')(console, 'yyyy/mm/dd HH:MM:ss.l');

const app = express();

app
  .use(cookieParser())
  .use(cors())
  .use(json())
  .use(urlencoded({ extended: false }))
  .use(morgan('dev'))
  .use('/', router);

mongoose.connect(
  process.env.DB_URI!,
  {
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      throw err;
    }

    console.log('db connected');
  },
);

mongoose.set('useCreateIndex', true);

export default app;
