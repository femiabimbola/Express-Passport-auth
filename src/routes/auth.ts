import { Request, NextFunction, Router } from "express";
import { checkSchema } from "express-validator";
import { validationResult, matchedData } from "express-validator";
import { createUser, signIn, getAllUser, signout, verfiyEmail } from "../controller/user";
import { createUserValidationSchema } from "../validation/user";
import passport from "passport";
import "../utils/passportStrategy/localStrategy"
import { verifyAdmin } from "../middleware/validateUser";

const router = Router();

router.post("/api/auth/register", checkSchema(createUserValidationSchema), createUser);
router.post("/api/auth/login", passport.authenticate("local", {
  // failureRedirect: '/login', 
  failureFlash: true}), signIn)
router.get("/api/auth/logout", signout),
router.get("/api/auth/users", verifyAdmin, getAllUser);
router.patch("/api/verify/:email", verfiyEmail )

export default router;
