import passport from 'passport'
import { Strategy } from 'passport-local'
import { findAUserByEmail, findAUserByID } from '../../model/userModel';

// The serialize function takes the user object and stores it in the session.it get called when user sign in
passport.serializeUser((user:any, done) => {
  console.log(`inside serialize user`);
  done(null, user.id)
})

// The deserialize function take the id from session, and find who the user is.it get called when user sign in and call other routes
passport.deserializeUser(async (id: string, done) => {
  
  console.log(`inside deserialize user ${id}`);
  try {
    const findUser = await findAUserByID(id)
    if (!findUser) throw new Error("user not found");
    done(null, findUser);
  } catch (error) {
    done(error, false);
  }
});

export default passport.use(
  new Strategy({usernameField:"email"}, async (username, password, done) =>{
    try{
      const findUser = await findAUserByEmail(username);
      if(!findUser) throw new Error("user not found") // Error is move to the catch block
      if(findUser.password !== password) throw new Error("Invalid Password")
      // The done has 3 arg! Check the docs
      done(null, findUser)
    }catch(error){
        done(error, false)
    }
  })
)