const express = require("express");
const itemsRouter = express.Router();
const itemsController = require("../controllers/itemsController");

itemsRouter.get("/", itemsController.showItems);
itemsRouter.get("/addnewitem",itemsController.showAddNewItemForm)
itemsRouter.post("/", itemsController.addItem);

module.exports = { itemsRouter };


