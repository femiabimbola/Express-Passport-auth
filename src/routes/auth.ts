import { Request, Response, NextFunction, Router } from "express";
import { checkSchema } from "express-validator";
import { validationResult, matchedData } from "express-validator";
import { createUser, signIn, getAllUser } from "../controller/user";
import { createUserValidationSchema } from "../validation/user";
import passport from "passport";
import "../utils/passportStrategy/localStrategy"

const router = Router();

router.post("/api/auth/register", checkSchema(createUserValidationSchema), createUser);
router.post("/api/auth/login", passport.authenticate("local"), signIn)
router.get("/api/auth/users", getAllUser);

export default router;
