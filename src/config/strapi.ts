import { StrapiAuthService } from '../services/StrapiAuthService';
export const strapiService = new StrapiAuthService(process.env.STRAPI_URL || 'http://localhost:1337');
