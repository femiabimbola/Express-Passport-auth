import { validationResult, matchedData } from "express-validator";
import { createloanModel, getAllloanModel } from "../model/loanModel";
import { Request, Response, NextFunction, Router } from "express";

export const createLoan = async (req: Request, res: Response) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({ error: result.array().map((err) => err) });
  }
  const data = matchedData(req);
  //find the way int wont be less than or more than
  const { firstName, lastName, email, amount, tenor,} = data;
  const newLoan= {firstName, lastName, email, amount, tenor,};

  try {
    const userObject = await createloanModel(newLoan);
    return res.status(201).send({ msg: "You have successfully created", data: userObject });
  } catch (error) {
    return res.status(201).send({ msg: "Could not create user" });
  }
};

export const getAllLoan = async (req: Request, res: Response) => {
  try {
    const userObject = await getAllloanModel();
    return res.status(200).send({ message: "You have all your useer", data: userObject });
  } catch (error) {
    return res.status(200).send({ message: "Could not get the user" });
  }
};
