import { Request, Response, NextFunction, Router } from "express";
import { checkSchema } from "express-validator";
import { createloanValidationSchema } from "../validation/loan";
import { createLoan, getAllLoan } from "../controller/loan";
import { verifyUser } from "../middleware/validateUser";

const router = Router();

router.post("/api/loan/create", checkSchema(createloanValidationSchema), verifyUser, createLoan);
router.get("/api/loans/", verifyUser, getAllLoan);

export default router;
