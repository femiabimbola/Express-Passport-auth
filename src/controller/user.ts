import { Request, Response, NextFunction, Router } from "express";
import { validationResult, body, matchedData } from "express-validator";

export const createUser = async (req: any, res: Response) => {
  const result = validationResult(req);
  console.log(result);
  // if (!result.isEmpty()) {
  //   return res.status(400).send({ error: result.array().map((err) => err) });
  // }

  const { body } = req;
  const data = matchedData(req);
  console.log(data);
  res.status(201).send({ msg: "You have successfully log in" });
};
