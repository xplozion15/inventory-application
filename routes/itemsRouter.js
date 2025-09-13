const express = require("express");
const itemsRouter = express.Router();
const itemsController = require("../controllers/itemsController");

itemsRouter.get("/", itemsController.showItems);
itemsRouter.get("/addnewitem",itemsController.showAddNewItemForm)
itemsRouter.post("/", itemsController.addItem);
itemsRouter.post("/:id/delete",itemsController.deleteItem)
itemsRouter.get("/:id/showUpdateItemForm",itemsController.showUpdateItemForm)

module.exports = { itemsRouter };

