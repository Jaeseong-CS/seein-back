import cookieParser from 'cookie-parser';
import cors from 'cors';
import { config } from 'dotenv-safe';
import express, { json, urlencoded } from 'express';
import { connect } from 'mongoose';
import morgan from 'morgan';

import router from './routes/index';

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/', router);

config();

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

export default app;
