import { Request, Response, NextFunction, Router } from "express";
import { createUser } from "../controller/user";

const router = Router();

router.post("/api/auth/login", createUser);

export default router;
