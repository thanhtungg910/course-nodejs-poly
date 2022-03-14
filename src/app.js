import express from "express";
import morgan from "morgan";
import db from "./config/dbconfig";
import { default as productList } from "./routes/products";

const app = express();
//MIDDLEWARE
app.use(morgan());
app.use(express.json());
app.use("/api/products", productList);

app.get("/", (req, res) => {
	res.send("<h1>HOME PAGE</h1>");
});

//CONNECT DB
db.connect();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log("Running port " + PORT);
});
