const pool = require("./pool");

async function getCategoriesFromDb() {
  const { rows } = await pool.query("SELECT * FROM fruit_categories");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

module.exports = {
  getCategoriesFromDb,
  insertUsername
};


