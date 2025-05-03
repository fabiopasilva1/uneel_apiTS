import { Request, Response } from "express";
import { StrapiAuthService } from "../services/StrapiAuthService";

export class StrapiController {
  private strapiService: StrapiAuthService;

  constructor(strapiService: StrapiAuthService) {
    this.strapiService = strapiService;
  }

  login = async (req: Request, res: Response) => {
    const { identifier, password } = req.body;
    try {
      const token = await this.strapiService.login(identifier, password);
      res.status(200).json({ success: true, token });
    } catch (error: any) {
      res.status(401).json({ success: false, error: error.message });
    }
  };
}
