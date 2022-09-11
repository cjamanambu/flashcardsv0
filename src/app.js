import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index';
import authRouter from './routes/auth';

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/v1', indexRouter);
app.use('/v1/auth', authRouter);

app.get('*', (req, res) => {
  res.status(404).send({ message: 'Oops! This route does not exist' });
});

export default app;
