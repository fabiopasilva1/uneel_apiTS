import sql from 'mssql';

export class MSSQLService {
  private config: sql.config;

  constructor(config: sql.config) {
    this.config = config;
  }

  async executeQuery(query: string) {
    const pool = await sql.connect(this.config);
    const result = await pool.request().query(query);
    await pool.close();
    return result.recordset;
  }
}
