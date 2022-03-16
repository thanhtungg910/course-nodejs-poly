import slugify from "slugify";
import CategoryModel from "../models/Categories";
import ProductsModel from "../models/Products";
const categoriesControll = {
	async get(req, res) {
		try {
			const categories = await CategoryModel.find().exec();
			res.status(200).json(categories);
		} catch (error) {
			res.status(400).json(category);
		}
	},
	async getProductByCategory(req, res) {
		let products;
		try {
			const category = await CategoryModel.findOne({ slug: req.params.slug }).exec();
			if (!req.query.q) {
				products = await ProductsModel.find({ category: category }).exec();
			} else {
				products = await ProductsModel.find({
					category: category,
					title: {
						$regex: new RegExp(req.query.q),
					},
				}).exec();
			}
			res.status(200).json({ category, products });
		} catch (error) {
			res.status(400).json(category);
		}
	},
	/**
	 * Tim kiem theo muc
	 */
	async searchProductByCategory(req, res) {
		console.log(req.query);
		try {
			const category = await CategoryModel.findOne({ slug: req.params.slug }).exec();
			const products = await ProductsModel.find({ category: category }).exec();
			res.status(200).json({ category, products });
		} catch (error) {
			res.status(400).json(category);
		}
	},
	create(req, res) {
		req.body.slug = slugify(req.body.title);
		try {
			const category = new CategoryModel(req.body).save();
			res.status(200).json(category);
		} catch (error) {
			res.status(400).json(category);
		}
	},
};
export default categoriesControll;
