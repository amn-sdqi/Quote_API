// const mongodb = require("mongodb");

// const MongoClient = mongodb.MongoClient;

// let database;

// async function dbInit(req, res, next) {
// 	const client = await MongoClient.connect("mongodb//:127.0.0.1:27017");
// 	database = client.db("quoteAPI");

// 	if (!database) {
// 		throw new Error("Database Not Found");
// 	}

// 	return database;
// }

// module.exports = dbInit;
