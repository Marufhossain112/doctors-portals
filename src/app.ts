import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

import routes from './app/routes';

import cookieParser from 'cookie-parser';
import path from 'path';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';

const app: Application = express();

const corsOptions = {
  origin: true,
  credentials: true,
};
app.use('*', cors(corsOptions));
app.use(cookieParser());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Welcome HTTP SERVER',
  });
});
app.get('/error', (req: Request, res: Response, next: NextFunction) => {
  throw new Error("Demo Error");
});
app.use(globalErrorHandler);
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: "false",
    message: "not found",
    errorMessages: [{
      path: req.originalUrl,
      message: "not found"
    }]
  });
});
export default app;
