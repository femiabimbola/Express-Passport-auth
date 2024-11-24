import { Request, Response, NextFunction, Router } from "express";
import { CustomRequest } from '../../types'

export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  
  const {user} = req
  if (!user) return res.status(400).send({ msg: "You do not have access for this route" });
  console.log(user)
  next()
}


export const verifyAdmin = ( req: CustomRequest, res: Response, next: NextFunction) => {
  const isAdmin = req.user?.isAdmin
  if (!isAdmin) return res.status(400).send({ msg: "You do not have access for this route" });
  next()
}