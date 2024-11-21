import { pool } from "../db";

export const createloanModel = async (params: any) => {
    const {firstname, lastname, email,amount, tenor, status, repaid, paymentInstallment, balance, interest} = params;

    const newLoan = [
      firstname,
      lastname,
      email,
      amount,
      tenor,
      status,
      repaid,
      paymentInstallment,
      balance,
      interest,
    ];
    const queryText =
      "INSERT INTO loans (firstname, lastname, email, amount, tenor, status, repaid, paymentinstallment, balance, interest) VALUES  ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *";
      try {
        
        const result = await pool.query(queryText, newLoan);
        return result.rows;
      } catch (error) {
        console.log(`error occured creating user ${error}`);
      } 
  };

export const findLoanByEmail = async (email: string) => {
  try {
    const { rows } = await pool.query("SELECT * FROM loans WHERE email = $1", [
      email,
    ]);
    return rows;
  } catch (error: any) {
    console.error(`Error in finding loan${error.message}`);
    return false;
  }
};

export const findLoanById = async (id: number) => {
  try {
    const { rows } = await pool.query("SELECT * FROM loans WHERE id = $1", [
      id,
    ]);
    if (rows) {
      return rows[0];
    }
  } catch (error: any) {
    console.error(`Error in finding loan by id${error.message}`);
    return false;
  }
};

export const getAllloanModel = async () => {
  try {
    const result = await pool.query("SELECT * FROM loans ORDER BY id ASC");
    return result.rows;
  } catch (error) {
    console.log(`error occured getting all user ${error}`);
  }
};


export const getAUserModel = async (id: number) => {
  const queryText = "SELECT * FROM loans WHERE id = $1";
  try {
    // await client.connect().then(() => console.log("connected to postgres database"));
    const result = await pool.query(queryText, [id]);
    // client.end().then(() => console.log("Connection to PostgreSQL closed"));
    return result.rows;
  } catch (error) {
    console.log(`error occured getting a user ${error}`);
  }
};