import { Request, Response, NextFunction, Router } from "express";

const router = Router();

router.post("/api/auth/login", (req: any, res: Response) => {
  res.status(201).send({ msg: "successfully log in" });
});

export default router;
