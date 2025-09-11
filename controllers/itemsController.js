const {navbarLinks} = require("./indexController")

function showItems(req, res) {
  res.send("displaying items here hehe");
}

function addItem(req, res) {
  res.redirect("/items")
}

function showAddNewItemForm(req,res) {
  res.render("addItemForm",{navbarLinks:navbarLinks});
}



module.exports = { showItems, addItem , showAddNewItemForm};


