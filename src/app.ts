import 'dotenv-safe/config';

import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { json, urlencoded } from 'express';
import { connect, set } from 'mongoose';
import morgan from 'morgan';

import router from './routes/index';

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/', router);

connect(
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
set('useCreateIndex', true);

export default app;
