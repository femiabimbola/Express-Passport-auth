import { Request, Response, NextFunction, Router } from "express";

export const createUser = async (req: any, res: Response) => {
  res.status(201).send({ msg: "You have successfully log in" });
};
