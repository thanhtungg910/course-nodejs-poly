const express = require("express");
const check = require("../middleware/check");
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

module.exports = router;
