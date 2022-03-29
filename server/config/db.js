const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const mongoose = require("mongoose");

const uri = process.env.MONGO_DB_URL;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("Connected to DB"))
  .catch((err) => console.log(err.message));

// const getCollectionByName = async (collectionName) => {
//   await client.connect();
//   const db = client.db("items");
//   return db.collection(collectionName);
// };

// const createNewItem = async (item) => {
//   const moviesCollection = await getCollectionByName("items");
//   moviesCollection.insertOne(item);
// };
// module.exports = {createNewItem}
