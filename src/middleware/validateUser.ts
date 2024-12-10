import { Request, Response, NextFunction, Router } from "express";
import {  UserRequest } from "../../types";

export const verifyUser = (req: Request, res: Response, next: NextFunction) => { 
  const {user} = req
  if (!user) return res.status(400).send({ msg: "You do not have access for this route" });
  next()
}


export const verifyAdmin = ( req: any, res: Response, next: NextFunction) => {
  const isAdmin = req.user?.isAdmin
  if (!isAdmin) return res.status(400).send({ msg: "You are not admin for this route" });
  next()
}

