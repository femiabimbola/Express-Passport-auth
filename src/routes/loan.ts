import { Request, Response, NextFunction, Router } from "express";
import { checkSchema } from "express-validator";

const router = Router();

router.post("/api/auth/register");

export default router;
