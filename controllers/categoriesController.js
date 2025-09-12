const { navbarLinks } = require("./indexController");
const db = require("../db/queries");

async function showCategories(req, res) {
  const categories =  await db.getCategoriesFromDb();
  res.render("showCategories",{navbarLinks:navbarLinks,categories:categories});
}

function addCategory(req, res) {
  res.redirect("/categories");
}

function showAddNewCategoryForm(req, res) {
  res.render("addCategoryForm", { navbarLinks: navbarLinks });
}

module.exports = { showCategories, addCategory, showAddNewCategoryForm };
