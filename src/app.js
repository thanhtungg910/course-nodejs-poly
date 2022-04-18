import express from "express";
import morgan from "morgan";
import db from "./config/dbconfig";
// import { default as productList } from "./routes/products";
// import { default as categoryList } from "./routes/categories";
// import { default as userList } from "./routes/user";
const app = express();
//MIDDLEWARE
app.use(morgan());
app.use(express.json());
//ROUTING
// app.use("/api/products", productList);
// app.use("/api/categories", categoryList);
// app.use("/api/users", userList);

app.get("/", (req, res) => {
     res.send("<h1>HOME PAGE</h1>");
});

//CONNECT DB
db.connect();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
     console.log("Running port " + PORT);
});
