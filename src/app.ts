import process from 'process';
import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import { StrapiAuthService } from './services/StrapiAuthService';
import compression from 'compression';
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
// app.use(strapiService.tokenVerify);
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
