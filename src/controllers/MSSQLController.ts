import { Request, Response } from 'express';
import { MSSQLService } from '../services/MSSQLService';

export class MSSQLController {
  private mssqlService: MSSQLService;

  constructor(mssqlService: MSSQLService) {
    this.mssqlService = mssqlService;
  }

  queryDatabase = async (req: Request, res: Response) => {
    const { sql } = req.query;
    if (!sql || typeof sql !== 'string') {
      return res.status(400).json({ success: false, error: 'SQL não informado' });
    }
    try {
      const result = await this.mssqlService.executeQuery(sql);
      res.status(200).json({ success: true, result });
    } catch (error) {
      if (error instanceof Error) res.status(500).json({ success: false, error: error.message });
    }
  };
}
