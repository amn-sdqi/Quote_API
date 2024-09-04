const express = require("express");
const quoteController = require("../controller/quote.controller");

const router = express.Router();

router.get("/get", quoteController.getRandomQoute);

router.get("/put", quoteController.putQuote);

module.exports = router;
