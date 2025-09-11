const express = require("express");
const categoriesRouter = express.Router();
const categoriesController = require("../controllers/categoriesController");


categoriesRouter.get("/", categoriesController.showCategories);
categoriesRouter.get("/addnewcategory", categoriesController.showAddNewCategoryForm);
categoriesRouter.post("/", categoriesController.addCategory);

module.exports = { categoriesRouter };
