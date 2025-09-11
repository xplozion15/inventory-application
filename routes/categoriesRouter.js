const express = require("express");
const categoriesRouter = express.Router();
const { showCategories } = require("../controllers/showCategories");
const { addCategory } = require("../controllers/addCategory");

categoriesRouter.get("/", showCategories);
categoriesRouter.post("/", addCategory);

module.exports = { categoriesRouter };
