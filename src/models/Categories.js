import { Schema, model } from "mongoose";
const CategoriesShema = Schema({
	title: {
		type: String,
		trim: true,
		required: true,
	},
	slug: {
		type: String,
	},
});
export default model("Categories", CategoriesShema);
