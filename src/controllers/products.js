import { default as productDb } from "../models/Products";
/* const products = [
	{ id: 1, title: "A" },
	{ id: 2, title: "B" },
	{ id: 3, title: "C" },
]; */

// GET ALL
const getAll = async (req, res) => {
	try {
		const products = await productDb.find();
		res.json(products);
	} catch (error) {
		console.log(error);
	}
};
const addProduct = (req, res) => {
	try {
		const { title, description, price } = req.body;
		const product = new productDb({
			title: title,
			description: description,
			price: price,
		})
			.save()
			.then(() => res.json(product));
	} catch (error) {
		console.log(error);
	}
};

const getProduct = (req, res) => {
	/* const id = req.params.id;
	const data = products.find((item) => item.id == id);
	// const newProduct = [...products, { ...req.body }];
	res.json(data); */
};
const update = (req, res) => {
	/* const newProducts = products.map((item) =>
		item.id === +req.params.id ? req.body : item
	);
	res.json(newProducts); */
};
const deleteProduct = (req, res) => {
	/* const id = req.params.id;
	const newProduct = products.filter((item) => item.id == id);
	// const newProduct = [...products, { ...req.body }];
	res.json(newProduct); */
};
export { getAll, addProduct, getProduct, update, deleteProduct };
