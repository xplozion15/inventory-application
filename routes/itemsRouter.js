const express = require("express");
const itemsRouter = express.Router();
const { showItems } = require("../controllers/showItems");
const { addItem } = require("../controllers/addItem");

itemsRouter.get("/", showItems);
itemsRouter.post("/", addItem);

module.exports = { itemsRouter };


