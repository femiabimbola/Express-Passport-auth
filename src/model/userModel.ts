import { client } from "../db";

export const createUserModel = async (params: any) => {
  const { firstName, lastName, email, password, phone, address, status, isAdmin } = params;
  const newUser = [firstName, lastName, email, password, phone, address, status, isAdmin];
  const queryText =
    "INSERT INTO users (firstname, lastname, email, password, phone, address, status, isAdmin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
  try {
    await client.connect().then(() => console.log("connected to postgres database"));
    const result = await client.query(queryText, newUser);
    client.end().then(() => console.log("Connection to PostgreSQL closed"));
    return result.rows;
  } catch (error) {
    console.log(`error occured creating user ${error}`);
  } finally {
    client.end().then(() => {
      console.log("Connection to PostgreSQL closed");
    });
  }
};

export const getAllUserModel = async () => {
  try {
    await client.connect().then(() => console.log("connected to postgres database"));

    const result = await client.query("SELECT * FROM users ORDER BY id ASC");

    client.end().then(() => console.log("Connection to PostgreSQL closed"));
    return result.rows;
  } catch (error) {
    console.log(`error occured getting all user ${error}`);
  } finally {
    client.end().then(() => {
      console.log("Connection to PostgreSQL closed");
    });
  }
};

export const getAUserModel = async (id: number) => {
  const queryText = "SELECT * FROM loans WHERE id = $1";
  try {
    await client.connect().then(() => console.log("connected to postgres database"));
    const result = await client.query(queryText, [id]);
    client.end().then(() => console.log("Connection to PostgreSQL closed"));
    return result.rows;
  } catch (error) {
    console.log(`error occured getting a user ${error}`);
  }
};

// export const createUserModel = (params: any) => {
//   try {
//     const { firstName, lastName, email, password, phone, address, status, isAdmin } = params;
//     const newUser = [firstName, lastName, email, password, phone, address, status, isAdmin];
//     const queryText =
//       "INSERT INTO users (firstname, lastname, email, password, phone, address, status, isAdmin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
//     client.connect().then(() => {
//       console.log("connected to postgres database");
//       client.query(queryText, newUser, (err, result) => {
//         if (err) {
//           console.error("Error inserting data", err);
//         } else {
//           console.log("User created successfully");
//         }

//         client.end();
//       });
//     });
//   } catch (error) {
//     console.log(`error occured creating user ${error}`);
//   }
// };
