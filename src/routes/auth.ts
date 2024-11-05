import { Request, Response, NextFunction, Router } from "express";
import { checkSchema } from "express-validator";
import { validationResult, matchedData } from "express-validator";
import { createUser, signIn, getAllUser, getAUser } from "../controller/user";
import { createUserValidationSchema } from "../validation/user";

const router = Router();

router.post("/api/auth/register", checkSchema(createUserValidationSchema), createUser);
router.get("/api/auth/users", getAllUser);
router.get("/api/auth/users/:id", getAUser);

export default router;
