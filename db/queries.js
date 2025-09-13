const pool = require("./pool");

async function getCategoriesFromDb() {
  const { rows } = await pool.query("SELECT * FROM fruit_categories");
  return rows;
}

async function getItemsFromDb() {
  const { rows } = await pool.query("SELECT * FROM fruits");
  return rows;
}

async function postItemInDb(formInput) {
  await pool.query(
    "INSERT INTO fruits (name,quantity,category_id) VALUES ($1, $2, $3)",
    [formInput.itemName,formInput.itemQuantity,formInput.itemCategory],
  );
}

async function postCategoryInDb(formInput) {
  await pool.query(
    "INSERT INTO fruit_categories (name) VALUES ($1)",
    [formInput.categoryName],
  );
}

async function  deleteItemFromDb(itemId) {
  //  itemId = Number(itemId);
  //  console.log(itemId);
  await pool.query("DELETE FROM fruits WHERE id=$1",[itemId])
}

async function  updateItemFromDb(itemId) {
  await pool.query("UPDATE fruits SET name='$1' WHERE id",[itemId])
}

async function getFruitFromDb(itemId) {
    let {rows} = await pool.query("SELECT name FROM fruits WHERE id = $1",[itemId]);
    // return rows[0].name;
    return rows[0];
}

module.exports = {
  getCategoriesFromDb,
  getItemsFromDb,
  postItemInDb,
  postCategoryInDb,
  deleteItemFromDb,
  getFruitFromDb,
};
