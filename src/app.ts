import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

import routes from './app/routes';

import cookieParser from 'cookie-parser';
import path from 'path';

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
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.FORBIDDEN).json({
    success: "false",
    message: "FORBIDDEN",
    errorMessages: {
      message: err
    }
  });
});
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
