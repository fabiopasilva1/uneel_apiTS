import { Router } from 'express';
import rabbitRoutes from './rabbitmq';
import mssqlRoutes from './mssql';
import strapiRoutes from './strapi';

const router = Router();

router.use('/rabbitmq', rabbitRoutes);
router.use('/mssql', mssqlRoutes);
router.use('/terabases', mssqlRoutes);
router.use('/login', strapiRoutes);

export default router;
