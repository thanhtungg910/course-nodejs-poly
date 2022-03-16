import mongoose, { Schema, ObjectId } from "mongoose";
const ProductsSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		slug: {
			type: String,
			minlength: 5,
			lowercase: true,
		},
		description: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		category: {
			type: ObjectId,
		},
	},
	{ timestamps: true }
);
export default mongoose.model("products", ProductsSchema);
