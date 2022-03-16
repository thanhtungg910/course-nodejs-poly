import express from "express";
import check from "../middleware/check";
import {
	getAll,
	addProduct,
	update,
	getProduct,
	deleteProduct,
	findByPrice,
} from "../controllers/products";
const router = express.Router();

router.get("/", check, getAll);

router.post("/", check, addProduct);

router.get("/:slug", check, getProduct);

router.get("/price_gte=:gte&price_lte=:lte", check, findByPrice);

router.patch("/:slug", check, update);

router.put("/:slug", check, update);

router.delete("/:slug", check, deleteProduct);

export default router;
