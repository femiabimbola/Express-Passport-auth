import genFunc from 'connect-pg-simple';
import session from "express-session";

const PostgresqlStore = genFunc(session);
const sessionStore = new PostgresqlStore({
  conString: process.env.DATABASE_URL,
});


export const sessionObject = {
  secret: "some tough secret", // to sign the cookies
  saveUninitialized: false, // Not saving unmodified session storage. No need to save random user
  resave: false,  //if session data is not modified, why store?
  cookie: { maxAge: 6000 * 60},
  store: sessionStore
}
