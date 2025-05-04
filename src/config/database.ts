import sql from 'mssql';

export const mssqlConfig: sql.config = {
  user: process.env.MSSQL_USER || 'sa',
  password: process.env.MSSQL_PASS || 'yourStrong(!)Password',
  server: process.env.MSSQL_HOST || 'localhost',
  database: process.env.MSSQL_DB || 'master',
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};
