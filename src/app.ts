import process from 'process';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';
import { StrapiAuthService } from './services/StrapiAuthService';
import compression from 'compression';
import { CorsOptions } from './config/CorsOptions';
dotenv.config();
const strapiService = new StrapiAuthService(process.env.STRAPI_URL || 'http://localhost:1337');
const app = express();
process.on('uncaughtException', (error) => {
  console.error('Erro não capturado: ', error.message);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('Rejeição não manipulada em: ', promise, 'razão: ', reason);
});
app.use(compression());
app.use(express.json());
// Identifica regras de cors
app.use((req, res, next) =>
  cors(CorsOptions)(req, res, (err: Error) => {
    console.log(req.url);
    if (err) {
      return res.status(403).send({ error: err.message });
    }
    next();
  }),
);
app.use(strapiService.tokenVerify);
app.use('/api', routes);
app.use('/terabases', (req: Request, res: Response, next: NextFunction) => {
  const newPath = req.originalUrl.replace('/terabases', '/api/terabases');
  req.url = newPath;
  routes(req, res, next);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
