import mongoose from "mongoose";

const UsersModel = new mongoose.Schema({
	username: {
		type: String,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});
export default mongoose.model("Users", UsersModel);
