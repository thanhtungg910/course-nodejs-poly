const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("<h1>HOME PAGE</h1>");
});

app.get("/api/products", (req, res) => {
	const products = [
		{ id: 1, title: "A" },
		{ id: 2, title: "B" },
		{ id: 3, title: "C" },
	];
	res.json(products);
});
const PORT = 3000;
app.listen(PORT, () => {
	console.log("Dang chay cong " + PORT);
});
