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

async function  showDeleteCategoriesForm(req,res) {
    const categoryId = req.params.id;
    const category = await db.getCategoryFromDb(categoryId);
    res.render("showDeleteCategoryForm",{categoryId:categoryId,categoryName:category.name,navbarLinks: navbarLinks});
}

async function  showUpdateCategoriesForm(req,res) {
    const categoryId = req.params.id;
    const category = await db.getCategoryFromDb(categoryId);
    res.render("showUpdateCategoryForm",{categoryId:categoryId,categoryName:category.name,navbarLinks: navbarLinks});
}

async function updateCategory(req,res) {
  console.log(req.body);
    const categoryId = parseInt(req.params.id);
    const categoryName = req.body["category-name-updated"];
    
    await db.updateCategoryFromDb(categoryId,categoryName);
    res.redirect("/categories")
}

async function deleteCategory(req,res) {
  console.log(req.body);
    const categoryId = parseInt(req.params.id);
    await db.deleteCategoryFromDb(categoryId);
    res.redirect("/categories")
}
module.exports = { showCategories, addCategory, showAddNewCategoryForm,showUpdateCategoriesForm,showDeleteCategoriesForm,updateCategory,deleteCategory};
