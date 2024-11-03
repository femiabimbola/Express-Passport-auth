
import {client} from "./index"

const dropTables = `
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS loans CASCADE;
DROP TABLE IF EXISTS repayments CASCADE;
`;

const dropDatabase =  () => {
  client.connect()
  .then(() => {
    console.log("connecred to postgres database")
    client.query(dropTables,(err, result) => 
      {
      if (err) {
        console.error("Error inserting data", err);
      } else {
        console.log("Table deleted successfully");
      }
   client.end();
    })
  })
};


dropDatabase();
