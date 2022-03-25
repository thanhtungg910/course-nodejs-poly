import jwt from "jsonwebtoken";
require("dotenv").config();
const check = (req, res, next) => {
	const header = req.headers.authorization;
	if (!header) return res.status(403).json("error");
	const token = header.split(" ")[1];
	jwt.verify(token, process.env.SECRET_KEY, function (err, data) {
		if (err) return res.status(400).json("jwt expired");
		req.user = data;
		return next();
	});
};
export default check;
