import { client } from "../db";

export const createloanModel = (params: any) => {
  try {
    const { firstName, lastName, email, password, phone, address, status, isAdmin } = params;
    const newUser = [firstName, lastName, email, password, phone, address, status, isAdmin];
    const queryText =
      "INSERT INTO loans (firstname, lastname, email, password, phone, address, status, isAdmin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
    client.connect().then(() => {
      console.log("connected to postgres database");
      client.query(queryText, newUser, (err, result) => {
        if (err) {
          console.error("Error inserting data", err);
        } else {
          console.log("User created successfully");
        }

        client.end();
      });
    });
  } catch (error) {
    console.log(`error occured creating user ${error}`);
  }
};
