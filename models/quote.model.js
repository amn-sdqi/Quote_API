const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = new Schema(
	{
		quote: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Quote = mongoose.model("quote", quoteSchema);

module.exports = Quote;
