import { Request, Response, NextFunction, Router } from "express";
import { validationResult, matchedData } from "express-validator";
import { createUserModel, findAphone, findAUserByEmail, getAllUserModel, verifyUser } from "../model/userModel";
import bcrypt from "bcryptjs"

export const createUser = async (req: Request, res: Response) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({ error: result.array().map((err) => err) });
  }
  const data = matchedData(req);
  
  const { firstName, lastName, email, password, phone, address } = data
  
  const emailexist = await findAUserByEmail(email)
  if(emailexist) return res.status(400).send({ msg: "User exists" });

  const phoneexist = await findAphone(phone)
  if(phoneexist) return res.status(400).send({ msg: "Phone exist" });

  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = {
    firstName,
    lastName,
    email,
    password : hashedPassword,
    phone,
    address,
    status: "unverified",
    isAdmin: false,
  };
  try {
    const userObject = await createUserModel(newUser);
    return res.status(201).send({ msg: "You have successfully created", data: userObject });
  } catch (error) {
    return res.status(201).send({ msg: "Could not create user" });
  }
};

export const signIn = async (req: any, res: Response) => {
  if (req.session && req.session.messages) {
    res.locals.messages = req.session.messages;
    req.session.messages = [];
    console.log(req.flash)
    console.log( res.locals.messages)
    console.log( req.session.messages)
    return res.status(401).send({ msg: res.locals.messages});
  }
  return res.status(201).send({ msg: "You have successfully log in" });
};


export const signout = async (req: Request, res: Response, next: NextFunction ) => {
  // req.logout();
  req.session.destroy((err) => {
    if (err) return next(err)
    // return res.redirect('/login');
  })
 return res.status(200).send({ message: "successfully signed out" });
}


export const verfiyEmail = async (req: Request, res: Response) => {
  // const confirmationLink = `http://localhost:3000/auth/new-verification?token=${token}`
  try {
    const { email } = req.params;
    console.log(email)
    const foundUser = await findAUserByEmail(email)
    if(!foundUser) return res.status(400).send({ msg: "No user found, register" });
    if (foundUser.status === 'verified') return res.status(400).send({ msg: "User is already verified" });
    await verifyUser(email)
    return res.status(200).send({ message: "User is verified" });
  } catch (error) {
    return res.status(200).send({ error: error, message: "Could not get verify User" });
  }
}

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const userObject = await getAllUserModel();
    return res.status(200).send({ message: "You have all your useer", data: userObject });
  } catch (error) {
    return res.status(200).send({ message: "Could not get the user" });
  }
};


