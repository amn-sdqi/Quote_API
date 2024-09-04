const express = require("express");
const quoteRoutes = require("./routes/quote.route");
const mongoose = require("mongoose");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use("/quote", quoteRoutes);

mongoose
	.connect("mongodb://127.0.0.1:27017/quoteAPI")
	.then((result) => {
		app.listen(2000, () => {
			console.log("connected & listening");
		});
	})
	.catch((err) => {
		console.log("Can not connect", err);
	});
