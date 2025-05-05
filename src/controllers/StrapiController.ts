import { Request, Response } from 'express';
import { StrapiAuthService } from '../services/StrapiAuthService';

export class StrapiController {
  private strapiService: StrapiAuthService;

  constructor(strapiService: StrapiAuthService) {
    this.strapiService = strapiService;
  }

  login = async (req: Request, res: Response) => {
    const { identifier, password } = req.body;
    let token;
    try {
      if (identifier && password) {
        token = await this.strapiService.login(identifier, password);
      } else {
        token = await this.strapiService.generateToken(req, res);
      }
      if (token) {
        res.status(200).json({ success: true, token });
      }
    } catch (error) {
      if (error instanceof Error) res.status(401).json({ success: false, error: error.message });
    }
  };
}
