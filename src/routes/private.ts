import dotenv from 'dotenv';
import { Request, Response, Router } from 'express';
import { StrapiAuthService } from '../services/StrapiAuthService';
dotenv.config();
const router = Router();
const strapiService = new StrapiAuthService(process.env.STRAPI_URL || 'http://localhost:1337');

router.get('/', strapiService.tokenVerify.bind(strapiService), async (req: Request, res: Response) => {
  try {
    res.status(200).json({ Authenticate: true });
  } catch (error) {
    if (error instanceof Error) res.status(500).json(error.message);
  }
});

export default router;
