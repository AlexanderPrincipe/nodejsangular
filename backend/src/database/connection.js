import sql from "mssql";
import config from "../config";

export const dbSettings = {
  user: 'Alexander',
  password: '123456',
  server: 'localhost',
  database: 'SistemaPrueba',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error);
  }
};

export { sql };