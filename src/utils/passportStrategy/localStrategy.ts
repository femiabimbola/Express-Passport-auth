import passport from 'passport'
import { Strategy } from 'passport-local'

// The serialize function takes the user object and stores it in the session.it get called when user sign in
passport.serializeUser((user:any, done) => {
  done(null, user.id)
})

// The deserialize function take the id from session, and find who the user is.it get called when user sign in and call other routes
passport.deserializeUser(async (id, done) => {
  try {
    const findUser = await mockUsers.find((user: any) => user.id === id)
    if (!findUser) throw new Error("user not found");
    done(null, findUser);
  } catch (error) {
    done(error, false);
  }
});

export default passport.use(
  new Strategy({usernameField:"email"}, (username, password, done) =>{
    try{
      const findUser = mockUsers.find((user: any) => user.username === username);
      if(!findUser) throw new Error("user not found") // Error is move to the catch block
      if(findUser.password !== password) throw new Error("Invalid Password")
      // The done has 3 arg! Check the docs
      done(null, findUser)
    }catch(error){
        done(error, false)
    }
  })
)