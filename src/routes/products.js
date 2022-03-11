import express from "express";
import check from "../middleware/check";
const router = express.Router();
const products = [
	{ id: 1, title: "A" },
	{ id: 2, title: "B" },
	{ id: 3, title: "C" },
];

router.get("/", check, (req, res) => {
	res.json(products);
});

router.post("/", check, (req, res) => {
	products.push(req.body);
	// const newProduct = [...products, { ...req.body }];
	res.json(products);
});
router.get("/:id", check, (req, res) => {
	const id = req.params.id;
	const data = products.find((item) => item.id == id);
	// const newProduct = [...products, { ...req.body }];
	res.json(data);
});

router.put("/:id", check, (req, res) => {
	const newProducts = products.map((item) =>
		item.id === +req.params.id ? req.body : item
	);
	res.json(newProducts);
});

router.delete("/:id", check, (req, res) => {
	const id = req.params.id;
	const newProduct = products.filter((item) => item.id == id);
	// const newProduct = [...products, { ...req.body }];
	res.json(newProduct);
});
export default router;
