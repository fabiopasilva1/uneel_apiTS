import { Router } from "express";
import { StrapiController } from "../controllers/StrapiController";
import { StrapiAuthService } from "../services/StrapiAuthService";

const router = Router();
const strapiService = new StrapiAuthService(
  process.env.STRAPI_URL || "http://localhost:1337"
);
const strapiController = new StrapiController(strapiService);

router.post("/login", strapiController.login);

export default router;
