import { Pool } from "pg";
import dotenv from "dotenv";
import { Client } from "pg";

dotenv.config();

interface DbProps {
  text?: any;
  params?: any;
}
const connectionString = process.env.NODE_ENV === "test" ? process.env.TEST_DB : process.env.DATABASE_URL;

export const pool = new Pool({ connectionString });

export const client = new Client({ connectionString });

// export const dbclient = ({ text, params }: any)  => {
//   client
//   .connect()
//   .then(() => {
//     console.log("connected to postgreSQL database");
//     console.log(params)
//     client.query(text, params, (err, result) =>
//       {
//       if (err) {
//         console.error("Error inserting data", err);
//       } else {
//         console.log("Data inserted successfully");
//       }

//       client.end();
//     });

//   })
//   .catch((error) => console.error("error connecting to sql", error));
// }
