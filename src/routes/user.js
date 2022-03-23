import { Router } from "express";
import userControll from "../controllers/users";
const router = Router();
router.post("/signup", userControll.signup);
router.post("/signin", userControll.signin);
export default router;
