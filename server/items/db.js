const { MongoClient } = require("mongodb");
const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

const url = process.env.MONGO_DB_URL;
const client = new MongoClient(url, { useUnifiedTopology: true });


const getCollectionByName = async (collectionName) => {
  await client.connect();
  const db = client.db("items");
  return db.collection(collectionName);
};

const createNewItem = async (item) => {
  const moviesCollection = await getCollectionByName("items");
  moviesCollection.insertOne(item);
};
module.exports = {createNewItem}
