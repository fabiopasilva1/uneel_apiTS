import { Router } from 'express';
import { MSSQLController } from '../controllers/MSSQLController';
import { MSSQLService } from '../services/MSSQLService';
import { mssqlConfig } from '../config/database';

const router = Router();

const mssqlService = new MSSQLService(mssqlConfig);
const mssqlController = new MSSQLController(mssqlService);

router.get('/query', mssqlController.queryDatabase);
router.post('/query', mssqlController.queryDatabase);

export default router;
