const {navbarLinks} = require("./indexController")
const db = require("../db/queries");

async function showItems(req, res) {
  const items = await db.getItemsFromDb();
  res.render("showItems",{navbarLinks:navbarLinks,items:items})
}

async function  deleteItem(req,res) {

    const itemId = req.params.id;
    await db.deleteItemFromDb(itemId);
    res.redirect("/items")
}

async function updateItem(req,res) {
  console.log(req.body);
    const itemId = parseInt(req.params.id);
    const itemName = req.body["fruit-name-updated"];
    const itemQuantity = req.body["fruit-quantity-updated"];
    await db.updateItemFromDb(itemId,itemName,itemQuantity);
    res.redirect("/items")
}

async function deleteItem(req,res) {
  console.log(req.body);
    const itemId = parseInt(req.params.id);
    const itemName = req.body["fruit-name"];
    await db.deleteItemFromDb(itemId,itemName);
    res.redirect("/items")
}

async function addItem(req, res) {
  const formInputs = {
    itemName : req.body["item-name"],
    itemQuantity : req.body["item-quantity"],
    itemCategory : req.body["select-category"],
  }

  await db.postItemInDb(formInputs);
  res.redirect("/items")
}

async function showAddNewItemForm(req,res) {
 const categories = await db.getCategoriesFromDb();
 res.render("addItemForm",{navbarLinks:navbarLinks,categories:categories})
}

async function  showDeleteItemForm(req,res) {
    const itemId = req.params.id;
    const fruit = await db.getFruitFromDb(itemId);
    res.render("showDeleteItemForm",{itemId:itemId,fruitName:fruit.name});
}

async function  showUpdateItemForm(req,res) {
    const itemId = req.params.id;
    const fruit = await db.getFruitFromDb(itemId);
    res.render("showUpdateItemForm",{itemId:itemId,fruitName:fruit.name,fruitQuantity:fruit.quantity,navbarLinks:navbarLinks});
}

module.exports = { showItems, addItem , showAddNewItemForm,deleteItem,showUpdateItemForm,updateItem,showDeleteItemForm};




