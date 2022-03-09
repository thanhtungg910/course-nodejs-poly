import express from "express";
import check from "../middleware/check";
const router = express.Router();

router.get("/", check, (req, res) => {
	const products = [
		{ id: 1, title: "A" },
		{ id: 2, title: "B" },
		{ id: 3, title: "C" },
	];
	res.json(products);
});

router.post("/products", check, (req, res) => {
	const products = [
		{ id: 1, title: "A" },
		{ id: 2, title: "B" },
		{ id: 3, title: "C" },
	];
	products.push(req.body);
	// const newProduct = [...products, { ...req.body }];
	console.log(products);
	res.json(products);
});
router.get("/products/:id", check, (req, res) => {
	const products = [
		{ id: 1, title: "A" },
		{ id: 2, title: "B" },
		{ id: 3, title: "C" },
	];
	const id = req.params.id;
	const data = products.find((item) => item.id == id);
	console.log(data);
	// const newProduct = [...products, { ...req.body }];
	res.json(data);
});

export default router;
