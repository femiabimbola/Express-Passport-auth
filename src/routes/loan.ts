import { Request, Response, NextFunction, Router } from "express";
import { checkSchema } from "express-validator";
import { createloanValidationSchema } from "../validation/loan";
import { createLoan, getAllLoan } from "../controller/loan";

const router = Router();

router.post("/api/loan/create", checkSchema(createloanValidationSchema), createLoan);
router.get("/api/loans/", getAllLoan);

export default router;
