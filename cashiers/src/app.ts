import { PORT } from './config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
const morgan = require('morgan');
const winston = require('./winston');

import { cashierRouter } from "./router";

const app = express();

morgan.token('body', req => JSON.stringify(req.body));
morgan.token('query', req => JSON.stringify(req.query));
app.use(morgan( ':method :status :url :query body :body size :res[content-length] - :response-time ms',
{ stream: winston.stream } ) );

app.use((req, res, next) => {
  winston.info(JSON.stringify(req.query));
  next();
});

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    winston.info('requested empty');
    return;
  }
  next();
});

app.use((err, req, res, next) => {
  winston.info('Internal Server Error');
  winston.error(`${err.status || INTERNAL_SERVER_ERROR} - ${err.message}`);
  res.status(INTERNAL_SERVER_ERROR).send('server error, this will be resolved shortly!');
})

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/cashiers", cashierRouter);
app.use("/api/cashiers/TargetCashiers1", cashierRouter);
app.use("/api/cashiers/TargetCashiers2", cashierRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
