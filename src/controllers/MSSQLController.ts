import { Request, Response } from 'express';
import { MSSQLService } from '../services/MSSQLService';
import { SPQuery } from '../querys/sp';
import { TargetModel } from '../models/target.model';

export class MSSQLController {
  private mssqlService: MSSQLService;

  constructor(mssqlService: MSSQLService) {
    this.mssqlService = mssqlService;
  }

  queryDatabase = async (req: Request, res: Response) => {
    const { sql } = req.body || req.query;
    console.log(`[${new Date().toISOString()}][${req.ip}] ${sql}`);
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

  spquery = async (req: Request, res: Response) => {
    try {
      const data = req?.body?.data;
      const queryName = req?.query?.query as string;
      // const page = Number(req.query.page) || 1;
      // const pageSize = Number(req.query.pageSize) || 50;
      // const offset = (page - 1) * pageSize;
      // const withCount = req.query.withCount === 'true';

      if (queryName === 'cpf') {
        await new SPQuery(this.mssqlService).spCpf(data).then((r) => {
          const result = r.map((item) => new TargetModel({ ...item }));
          res.status(200).json(result);
        });
      }
      if (queryName === 'telefone') {
        await new SPQuery(this.mssqlService).spTel(data).then((r) => res.status(200).json(r));
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };
}
