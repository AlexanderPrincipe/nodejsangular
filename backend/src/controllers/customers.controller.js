import { getConnection, sql } from "../database";


export const getCustomers = async (req, res) => {
    console.log('Corre getConnection');
    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM CUSTOMERS');
    console.log('result', result);
    res.json(result.recordset);
};

export const createNewCustomer = async (req, res) => {
  const { name, edad } = req.body;
  console.log('REQ BODY', req.body);
  try {
    const pool = await getConnection();

    await pool.request().input("name", sql.VarChar, name).input("edad", sql.Int, edad).query("INSERT INTO Customers (name, edad) VALUES (@name,@edad)");
    res.json({ name, edad });
  } catch (error) {
    res.send(error.message);
  }
}
