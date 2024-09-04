const Quote = require("../models/quote.model");

function putQuote(req, res) {
	const quote = new Quote(req.body);
	quote
		.save()
		.then((result) => {
			res.redirect("/quote/get");
		})
		.catch((err) => {
			res.send({ message: "No request body found !!!" });
		});
}

function getRandomQoute(req, res) {
	const quotes = Quote.find()
		.then((result) => {
			let index = Math.floor(Math.random() * result.length);
			res.json({ quote: result[index].quote });
		})
		.catch((err) => {
			console.log(err);
		});
}

module.exports = {
	getRandomQoute: getRandomQoute,
	putQuote: putQuote,
};
