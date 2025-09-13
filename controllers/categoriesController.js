const { navbarLinks } = require("./indexController");
const db = require("../db/queries");

async function showCategories(req, res) {
  const categories =  await db.getCategoriesFromDb();
  res.render("showCategories",{navbarLinks:navbarLinks,categories:categories});
}

async function addCategory(req, res) {
  const formInputs = {
    categoryName : req.body["category-name"],
  }
  await db.postCategoryInDb(formInputs);
  res.redirect("/categories");
}


function showAddNewCategoryForm(req, res) {
  res.render("addCategoryForm", { navbarLinks: navbarLinks });
}

module.exports = { showCategories, addCategory, showAddNewCategoryForm };
