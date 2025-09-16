const { navbarLinks } = require("./indexController");
const db = require("../db/queries");
const { validationResult } = require("express-validator");
require("dotenv").config();
const validator = require("../middlewares/validators");

async function showCategories(req, res) {
  const categories = await db.getCategoriesFromDb();
  res.render("showCategories", {
    navbarLinks: navbarLinks,
    categories: categories,
  });
}

const addCategory = [
  validator.validateAddCategory,
  async (req, res) => {
    const errors = validationResult(req);

    const formInputs = {
      categoryName: req.body["category-name"],
    };

    if (!errors.isEmpty()) {
      return res.status(400).render("addCategoryForm", {
        errors: errors.array(),
        categoryName: req.body["categoryName"],
        navbarLinks: navbarLinks,
      });
    } else {
      await db.postCategoryInDb(formInputs);
      res.redirect("/categories");
    }
  },
];

function showAddNewCategoryForm(req, res) {
  res.render("addCategoryForm", { navbarLinks: navbarLinks });
}

async function showDeleteCategoriesForm(req, res) {
  const categoryId = req.params.id;
  const category = await db.getCategoryFromDb(categoryId);
  res.render("showDeleteCategoryForm", {
    categoryId: categoryId,
    categoryName: category.name,
    navbarLinks: navbarLinks,
  });
}

async function showUpdateCategoriesForm(req, res) {
  const categoryId = req.params.id;
  const category = await db.getCategoryFromDb(categoryId);
  res.render("showUpdateCategoryForm", {
    categoryId: categoryId,
    categoryName: category.name,
    navbarLinks: navbarLinks,
  });
}

const updateCategory = [
  validator.validateUpdateCategory,
  async (req, res) => {
    const errors = validationResult(req);

    const categoryId = parseInt(req.params.id);
    const categoryName = req.body["category-name"];
    const updatedCategoryName = req.body["category-name-updated"];

    if (!errors.isEmpty()) {
      return res.status(400).render("showUpdateCategoryForm", {
        errors: errors.array(),
        categoryId: categoryId,
        categoryName: categoryName,
        navbarLinks: navbarLinks,
      });
    } else {
      await db.updateCategoryFromDb(categoryId, updatedCategoryName);
      res.redirect("/categories");
    }
  },
];

const deleteCategory = [
  validator.validateDeleteCategory,
  async (req, res) => {
    const errors = validationResult(req);

    const categoryId = parseInt(req.params.id);
    const categoryName = req.body["category-name"];

    if (!errors.isEmpty()) {
      return res.status(400).render("showDeleteCategoryForm", {
        errors: errors.array(),
        categoryId: categoryId,
        categoryName: categoryName,
        navbarLinks: navbarLinks,
      });
    } else {
      await db.deleteCategoryFromDb(categoryId);
      res.redirect("/categories");
    }
  },
];

async function showSpecificCategoryItems(req, res) {
  const categoryId = parseInt(req.params.id);
  const fruits = await db.getFruitsOfACategoryFromDb(categoryId);
  console.log(fruits);
  res.render("showItemsOfCategory", {
    fruits: fruits,
    navbarLinks: navbarLinks,
  });
}

module.exports = {
  showCategories,
  addCategory,
  showAddNewCategoryForm,
  showUpdateCategoriesForm,
  showDeleteCategoriesForm,
  updateCategory,
  deleteCategory,
  showSpecificCategoryItems,
};
