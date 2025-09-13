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

async function  updateItem(req,res) {

    const itemId = req.params.id;
    await db.updateItemFromDb(itemId);
    res.redirect("/items")
}

async function addItem(req, res) {
  console.log(req.body)
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

async function  showUpdateItemForm(req,res) {
    const itemId = req.params.id;
    const fruitName = await db.getFruitFromDb().name;
    const fruitQuantity = await db.getFruitFromDb().quantity;
    res.render("showUpdateItemForm",{itemId:itemId,fruitName:fruitName,fruitQuantity:fruitQuantity});
}


module.exports = { showItems, addItem , showAddNewItemForm,deleteItem,showUpdateItemForm};


