import { Request, Response, NextFunction, Router } from "express";
import { checkSchema } from "express-validator";
import { createloanValidationSchema } from "../validation/loan";
import { createLoan, getAllLoan, getAloan, userLoan } from "../controller/loan";
import { verifyUser } from "../middleware/validateUser";

const router = Router();

router.post("/api/loan/create", checkSchema(createloanValidationSchema), verifyUser, createLoan);
router.get("/api/loans/", verifyUser, getAllLoan);
router.get('/api/loans/:id',  getAloan)
router.get('/api/myloan', userLoan )

export default router;
