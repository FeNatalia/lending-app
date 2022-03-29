const db = require("./db");

const addItem = async (itemData) => {
  const item = {
    name: itemData.name,
    description: itemData.description,
    city: itemData.city,
    category: itemData.category,
  };

  await db.createNewItem(item);
  return item;
};

module.exports = {addItem}