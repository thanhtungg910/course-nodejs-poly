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

router.get("/:id", check, getProduct);

router.get("/price_gte=:gte&price_lte=:lte", check, findByPrice);

router.patch("/:id", check, update);

router.put("/:id", check, update);

router.delete("/:id", check, deleteProduct);

export default router;
