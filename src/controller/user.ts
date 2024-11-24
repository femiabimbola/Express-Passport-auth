import { Request, Response, NextFunction, Router } from "express";
import { validationResult, matchedData } from "express-validator";
import { createUserModel, findAphone, findAUserByEmail, getAllUserModel } from "../model/userModel";
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

export const signIn = async (req: Request, res: Response) => {
  // console.log(req.session) 
  // console.log(req.session.id)
  //Used the passport logic to sign ins
  return res.status(201).send({ msg: "You have successfully log in" });
};


export const verfiyEmail = async (req: Request, res: Response) => {}

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const userObject = await getAllUserModel();
    return res.status(200).send({ message: "You have all your useer", data: userObject });
  } catch (error) {
    return res.status(200).send({ message: "Could not get the user" });
  }
};


