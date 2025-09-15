const { navbarLinks } = require("./indexController");
const db = require("../db/queries");
const { validationResult } = require("express-validator");
require("dotenv").config();
const validator = require("../middlewares/validators");


async function showItems(req, res) {
  const items = await db.getItemsFromDb();
  res.render("showItems", { navbarLinks: navbarLinks, items: items });
}

const updateItem = [
  validator.validateUpdateItem,
  async (req, res) => {
    const errors = validationResult(req);
    const itemId = parseInt(req.params.id);
  const itemName = req.body["fruit-name"];
  const updatedItemName = req.body["fruit-name-updated"];
  const itemQuantity = req.body["fruit-quantity-updated"];

    if (!errors.isEmpty()) {
      return res.status(400).render("showUpdateItemForm", {
        errors: errors.array(),
        itemId: itemId,
        fruitName: itemName,
        navbarLinks: navbarLinks,
        fruitQuantity:itemQuantity,
      });
    } else {
      await db.updateItemFromDb(itemId, updatedItemName, itemQuantity);
  res.redirect("/items");
    }
  },
];




const deleteItem = [
  validator.validateDeleteItem,
  async (req, res) => {
    const errors = validationResult(req);

    const itemId = parseInt(req.params.id);
  const itemName = req.body["fruit-name"];

    if (!errors.isEmpty()) {
      return res.status(400).render("showDeleteItemForm", {
        errors: errors.array(),
        fruitName:itemName,
        navbarLinks: navbarLinks,
        itemId:itemId
      });
    } else {
      await db.deleteItemFromDb(itemId);
  res.redirect("/items");
    }
  },
];




const addItem = [
  validator.validateAddItem,
  async (req, res) => {
    const errors = validationResult(req);

    const formInputs = {
    itemName: req.body["item-name"],
    itemQuantity: req.body["item-quantity"],
    itemCategory: req.body["select-category"],
  };
  const categories = await db.getCategoriesFromDb();

    if (!errors.isEmpty()) {
      return res.status(400).render("addItemForm", {
        errors: errors.array(),
        navbarLinks: navbarLinks,
        categories:categories
      });
    } else {
      await db.postItemInDb(formInputs);
  res.redirect("/items");
    }
  },
];

async function showAddNewItemForm(req, res) {
  const categories = await db.getCategoriesFromDb();
  res.render("addItemForm", {
    navbarLinks: navbarLinks,
    categories: categories,
  });
}

async function showDeleteItemForm(req, res) {
  const itemId = req.params.id;
  const fruit = await db.getFruitFromDb(itemId);
  res.render("showDeleteItemForm", {
    itemId: itemId,
    fruitName: fruit.name,
    navbarLinks: navbarLinks,
  });
}

async function showUpdateItemForm(req, res) {
  const itemId = req.params.id;
  const fruit = await db.getFruitFromDb(itemId);
  res.render("showUpdateItemForm", {
    itemId: itemId,
    fruitName: fruit.name,
    fruitQuantity: fruit.quantity,
    navbarLinks: navbarLinks,
  });
}

module.exports = {
  showItems,
  addItem,
  showAddNewItemForm,
  deleteItem,
  showUpdateItemForm,
  updateItem,
  showDeleteItemForm,
};
