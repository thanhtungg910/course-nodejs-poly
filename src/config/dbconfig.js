import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const db = {
	async connect() {
		try {
			await mongoose.connect(process.env.MONGO_URL, () => {
				console.log("-----> Connected to db <-----");
			});
		} catch (error) {
			console.log(error);
		}
	},
};
export default db;
