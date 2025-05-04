import sql from 'mssql';

export const mssqlConfig: sql.config = {
  user: process.env.MSSQL_USER || 'sa',
  password: process.env.MSSQL_PASSWORD || 'yourStrong(!)Password',
  server: process.env.MSSQL_SERVER || 'localhost',
  database: process.env.MSSQL_DATABASE || 'master',
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};
