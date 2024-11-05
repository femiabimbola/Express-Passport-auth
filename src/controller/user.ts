import { Request, Response, NextFunction, Router } from "express";
import { validationResult, matchedData } from "express-validator";
import { createUserModel, getAllUserModel, getAUserModel } from "../model/userModel";

export const createUser = async (req: Request, res: Response) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({ error: result.array().map((err) => err) });
  }
  const data = matchedData(req);
  const { firstName, lastName, email, password, phone, address } = req.body;
  const newUser = {
    firstName,
    lastName,
    email,
    password,
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
  return res.status(201).send({ msg: "You have successfully log in" });
};

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const userObject = await getAllUserModel();
    return res.status(200).send({ message: "You have all your useer", data: userObject });
  } catch (error) {
    return res.status(200).send({ message: "Could not get the user" });
  }
};

export const getAUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  try {
    const userObject = await getAUserModel(id);
    return res.status(200).send({ message: "You have a your useer", data: userObject });
  } catch (error) {
    return res.status(200).send({ message: "Could not get the user" });
  }
};
