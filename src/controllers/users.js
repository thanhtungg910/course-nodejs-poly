import jwt from "jsonwebtoken";
import UserModel from "../models/User";
require("dotenv").config();
const userControll = {
	async signup(req, res) {
		const { username, email, password } = req.body;
		try {
			const exitUser = await UserModel.findOne({ email: email }).exec();
			if (exitUser) {
				return res.status(400).json("Email already exists");
			}
			const user = await new UserModel({
				username: username,
				email: email,
				password: password,
			}).save();
			res.status(200).json(user);
		} catch (error) {
			res.status(400).json({ message: "Registration failed" });
		}
	},
	async signin(req, res) {
		const { email, password } = req.body;
		try {
			const user = await UserModel.findOne({ email: email }).exec();
			if (!user) {
				return res.status(400).json("Email undefined");
			}
			if (!user.authenticate(password)) {
				return res.status(400).json("Password false");
			}
			const accessToken = jwt.sign({ email: user.email }, process.env.SECRET_KEY, {
				expiresIn: "30s",
			});
			res.status(200).json({ user, accessToken });
		} catch (error) {
			res.status(400).json({ message: "Registration failed" });
		}
	},
};
export default userControll;
