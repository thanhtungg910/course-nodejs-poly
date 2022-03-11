import mongoose from "mongoose";
const db = {
	async connect() {
		try {
			await mongoose.connect("mongodb://localhost:27017/nodejs_poly", () => {
				console.log("-----> Connected to db <-----");
			});
		} catch (error) {
			console.log(error);
		}
	},
};
export default db;
