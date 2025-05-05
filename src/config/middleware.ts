import dotenv from 'dotenv';
// import { NextFunction, Request } from 'express';
dotenv.config();
// import uuid from 'uuid';
const middleware = [
  //--
  {
    name: 'api::cors',
    enable: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    origins: process.env.API_CORS?.split(',') || ['*'],
    userAgent: ['postman', 'curl', 'node-fetch', 'insomnia', '*'],
  },
  //--
  {
    name: 'api::compression',
    enable: true,
    levle: 6,
    threshold: 1024 * 10,
  },
  // {
  //   name: 'api::logger',
  //   assignId(req: Request, res: Response, next: NextFunction) {
  //     const id = uuid.v4();
  //     req.id = id;
  //     next();
  //   },
  // },
];
export { middleware };
