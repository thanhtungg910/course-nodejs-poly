import mongoose from "mongoose";
import { createHmac } from "crypto";
import { v4 as uuidv4 } from "uuid";
const UsersModel = new mongoose.Schema(
	{
		username: {
			type: String,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		salt: {
			type: String,
		},
	},
	{ timestamps: true }
);
UsersModel.methods = {
	authenticate(password) {
		if (!password) return;
		try {
			return this.password == this.encrytPassword(password);
		} catch (error) {
			console.log(error);
		}
	},
	encrytPassword(password) {
		if (!password) return;
		try {
			return createHmac("sha256", this.salt).update(password).digest("hex");
		} catch (error) {
			console.log(error);
		}
	},
};
UsersModel.pre("save", function (next) {
	try {
		this.salt = uuidv4();
		this.password = this.encrytPassword(this.password);
		return next();
	} catch (error) {
		console.log(error);
	}
});

export default mongoose.model("Users", UsersModel);
