import { Router } from 'express';
import { StrapiController } from '../controllers/StrapiController';
import { strapiService } from '../config/strapi';

const router = Router();

const strapiController = new StrapiController(strapiService);

router.post('/login', strapiController.login);

export default router;
