import productDB from "../models/Products";
/* const products = [
	{ id: 1, title: "A" },
	{ id: 2, title: "B" },
	{ id: 3, title: "C" },
]; */

// GET ALL
const getAll = async (req, res) => {
	try {
		const products = await productDB.find().exec();
		res.status(200).json(products);
	} catch (error) {
		res.status(400).json({ message: error });
	}
};

// ADD PRODUCT
const addProduct = (req, res) => {
	try {
		const product = new productDB(req.body).save();
		res.status(200).json(product);
	} catch (error) {
		res.status(400).json({ message: error });
	}
};

const getProduct = async (req, res) => {
	try {
		const product = await productDB.findById(req.params.id).exec();
		res.status(200).json(product);
	} catch (error) {
		res.status(400).json({ message: error });
	}

	/* const id = req.params.id;
	const data = products.find((item) => item.id == id);
	// const newProduct = [...products, { ...req.body }];
	res.json(data); */
};
const update = async (req, res) => {
	try {
		const product = await productDB
			.updateOne(
				{
					_id: req.params.id,
				},
				{
					$set: req.body,
				},
				{ new: true }
			)
			.exec();
		res.status(200).json(product);
	} catch (error) {
		res.status(400).json({ message: error });
	}

	/* const newProducts = products.map((item) =>
		item.id === +req.params.id ? req.body : item
	);
	res.json(newProducts); */
};
const deleteProduct = async (req, res) => {
	try {
		const product = await productDB.remove({ _id: req.params.id }).exec();
		res.status(200).json(product);
	} catch (error) {
		res.json({ message: err });
	}

	/* const id = req.params.id;
	const newProduct = products.filter((item) => item.id == id);
	// const newProduct = [...products, { ...req.body }];
	res.json(newProduct); */
};

const findByPrice = (req, res) => {
	console.log(1);
	try {
	} catch (error) {
		res.status(400).json({ message: error });
	}
};

export { getAll, addProduct, getProduct, update, deleteProduct, findByPrice };
