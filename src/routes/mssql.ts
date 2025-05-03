import { Router } from "express";
import { MSSQLController } from "../controllers/MSSQLController";
import { MSSQLService } from "../services/MSSQLService";
import sql from "mssql";

const router = Router();
const mssqlConfig: sql.config = {
  user: process.env.MSSQL_USER || "sa",
  password: process.env.MSSQL_PASSWORD || "yourStrong(!)Password",
  server: process.env.MSSQL_SERVER || "localhost",
  database: process.env.MSSQL_DATABASE || "master",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};
const mssqlService = new MSSQLService(mssqlConfig);
const mssqlController = new MSSQLController(mssqlService);

router.get("/query", mssqlController.queryDatabase);

export default router;
