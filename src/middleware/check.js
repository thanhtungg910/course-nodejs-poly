const check = (rep, res, next) => {
	const access = true;
	if (access) return next();
	console.log("false");
};
export default check;
