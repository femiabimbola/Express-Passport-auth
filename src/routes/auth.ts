import { Request, Response, NextFunction, Router } from "express";
import { checkSchema } from "express-validator";
import { createUser } from "../controller/user";
import { createUserValidationSchema } from "../validation/user";

const router = Router();

router.post("/api/auth/register/", checkSchema(createUserValidationSchema), createUser);

export default router;
