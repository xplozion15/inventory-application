const express = require("express");
const categoriesRouter = express.Router();
const categoriesController = require("../controllers/categoriesController");


categoriesRouter.get("/", categoriesController.showCategories);
categoriesRouter.get("/addnewcategory", categoriesController.showAddNewCategoryForm);
categoriesRouter.post("/", categoriesController.addCategory);
categoriesRouter.get("/addnewcategory", categoriesController.showAddNewCategoryForm);
categoriesRouter.get("/:id/showUpdateCategoryForm",categoriesController.showUpdateCategoriesForm)
categoriesRouter.get("/:id/showDeleteCategoryForm",categoriesController.showDeleteCategoriesForm)
categoriesRouter.post("/:id/update",categoriesController.updateCategory)
categoriesRouter.post("/:id/delete",categoriesController.deleteCategory)

module.exports = { categoriesRouter };
