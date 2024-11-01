import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

interface DbProps {
  text: string;
  params?: any;
}
const connectionString = process.env.NODE_ENV === "test" ? process.env.TEST_DB : process.env.DATABASE_URL;

const pool = new Pool({ connectionString });

export const db = async ({ text, params }: DbProps) => {
  try {
    await pool.query(text, params);
  } catch (error) {
    console.log(`DATABASE ERROR - ${error}`);
  }
};
