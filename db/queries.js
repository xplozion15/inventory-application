const pool = require("./pool");

async function getCategoriesFromDb() {
  const { rows } = await pool.query(
    "SELECT * FROM fruit_categories ORDER BY id ASC",
  );
  return rows;
}

async function getItemsFromDb() {
  const { rows } = await pool.query("SELECT * FROM fruits ORDER BY id ASC");
  return rows;
}

async function postItemInDb(formInput) {
  await pool.query(
    "INSERT INTO fruits (name,quantity,category_id) VALUES ($1, $2, $3)",
    [formInput.itemName, formInput.itemQuantity, formInput.itemCategory],
  );
}

async function postCategoryInDb(formInput) {
  await pool.query("INSERT INTO fruit_categories (name) VALUES ($1)", [
    formInput.categoryName,
  ]);
}

async function deleteItemFromDb(itemId) {
  await pool.query("DELETE FROM fruits WHERE id=$1", [itemId]);
}

async function updateItemFromDb(itemId, itemName, itemQuantity) {
  await pool.query("UPDATE fruits SET name=$2,quantity = $3 WHERE id=$1", [
    itemId,
    itemName,
    itemQuantity,
  ]);
}

async function getFruitFromDb(itemId) {
  let { rows } = await pool.query("SELECT * FROM fruits WHERE id = $1", [
    itemId,
  ]);
  return rows[0];
}

async function getCategoryFromDb(categoryId) {
  const { rows } = await pool.query(
    "SELECT * FROM fruit_categories WHERE id = $1",
    [categoryId],
  );
  return rows[0];
}

async function updateCategoryFromDb(categoryId, categoryName) {
  await pool.query("UPDATE fruit_categories SET name=$2 WHERE id=$1", [
    categoryId,
    categoryName,
  ]);
}

async function deleteCategoryFromDb(categoryId) {
  await pool.query("DELETE FROM fruits WHERE category_id = $1", [categoryId]);
  await pool.query("DELETE from fruit_categories WHERE id = $1", [categoryId]);
}

async function getFruitsOfACategoryFromDb(categoryId) {
  const { rows } = await pool.query(
    "SELECT fruits.id,fruits.name,fruits.quantity,fruit_categories.name AS fruit_category_name FROM fruits INNER JOIN fruit_categories ON fruits.category_id = fruit_categories.id WHERE fruits.category_id = $1;",
    [categoryId],
  );
  return rows;
}

module.exports = {
  getCategoriesFromDb,
  getItemsFromDb,
  postItemInDb,
  postCategoryInDb,
  deleteItemFromDb,
  getFruitFromDb,
  updateItemFromDb,
  getCategoryFromDb,
  updateCategoryFromDb,
  deleteCategoryFromDb,
  getFruitFromDb,
  getFruitsOfACategoryFromDb,
};
