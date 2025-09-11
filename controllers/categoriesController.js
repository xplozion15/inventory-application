const {navbarLinks} = require("./indexController")

function showCategories(req, res) {
  res.send("displaying categories here hehe");
}

function addCategory(req, res) {
  res.redirect("/categories")
}

function showAddNewCategoryForm(req,res) {
  res.render("addCategoryForm",{navbarLinks:navbarLinks});
}




module.exports = { showCategories, addCategory , showAddNewCategoryForm};


