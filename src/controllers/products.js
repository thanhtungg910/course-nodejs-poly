const products = [
	{ id: 1, title: "A" },
	{ id: 2, title: "B" },
	{ id: 3, title: "C" },
];
const getAll = (req, res) => {
	res.json(products);
};
const addProduct = (req, res) => {
	products.push(req.body);
	// const newProduct = [...products, { ...req.body }];
	res.json(products);
};

const getProduct = (req, res) => {
	const id = req.params.id;
	const data = products.find((item) => item.id == id);
	// const newProduct = [...products, { ...req.body }];
	res.json(data);
};
const update = (req, res) => {
	const newProducts = products.map((item) =>
		item.id === +req.params.id ? req.body : item
	);
	res.json(newProducts);
};
const deleteProduct = (req, res) => {
	const id = req.params.id;
	const newProduct = products.filter((item) => item.id == id);
	// const newProduct = [...products, { ...req.body }];
	res.json(newProduct);
};
export { getAll, addProduct, getProduct, update, deleteProduct };
