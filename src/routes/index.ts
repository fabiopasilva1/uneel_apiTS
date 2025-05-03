import { Router } from 'express';
import rabbitRoutes from './rabbitmq';
import mssqlRoutes from './mssql';
import strapiRoutes from './strapi';
import privateRouter from './private';

const router = Router();

router.use('/rabbitmq', rabbitRoutes);
router.use('/mssql', mssqlRoutes);
router.use('/strapi', strapiRoutes);
router.use('/private', privateRouter);

export default router;
