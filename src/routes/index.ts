import { Router } from "express";
import authRouter from "./auth";
import loanRouter from "./loan";

const router = Router();

router.use(authRouter);
router.use(loanRouter);

export default router;
