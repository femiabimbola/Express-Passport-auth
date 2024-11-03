import { Request, Response, NextFunction, Router } from "express";
import { validationResult, matchedData } from "express-validator";
import { createUserModel} from "../model/userModel";

export const createUser = async (req: Request, res: Response) => {
  // const result = validationResult(req);
  // if (!result.isEmpty()) {
  //   return res.status(400).send({ error: result.array().map((err) => err) });
  // }
  // const data = matchedData(req);
  const {
    firstName, lastName, email, password, phone, address,
  } = req.body;
  const newUser = {
    firstName,lastName,email,
    password,
    phone,
    address,
    status: 'unverified',
    isAdmin: false,
  }
  console.log(newUser)
  try {
    const userObject = await createUserModel(newUser)
    return res.status(201).send({ msg: "You have successfully log in" });
  } catch (error) {
    return res.status(201).send({ msg: "Could not create user" });
  }
 
};



export const signIn = async (req: Request, res: Response) => {
  return res.status(201).send({ msg: "You have successfully log in" });
};
