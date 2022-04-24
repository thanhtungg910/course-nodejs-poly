import { Router } from "express";
import categoriesControll from "../controllers/categories";
import check from "../middleware/check";
const router = Router();
router.get("/", /* check, */ categoriesControll.get);
router.post("/", check, categoriesControll.create);
router.get("/products/:slug", /* check, */ categoriesControll.getProductByCategory);
export default router;
