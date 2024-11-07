
import { pool } from "../db";

export const createloanModel = async (params: any) => {
  try {
    const { firstName, lastName, email, password, phone, address, status, isAdmin } = params;
    const newUser = [firstName, lastName, email, password, phone, address, status, isAdmin];
    const queryText =
      "INSERT INTO loans (firstname, lastname, email, password, phone, address, status, isAdmin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
      const result = await pool.query(queryText, newUser);
      return result.rows;
  } catch (error) {
    console.log(`error occured creating user ${error}`);
  }
};

export const getAllloanModel = async () => {
  try {
    const result = await pool.query("SELECT * FROM users ORDER BY id ASC");
    return result.rows;
  } catch (error) {
    console.log(`error occured getting all user ${error}`);
  } 
};
