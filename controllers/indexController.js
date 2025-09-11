const navbarLinks = [
  { href: "/categories/addnewcategory", text: "Add Category" },
  { href: "/items/addnewitem", text: "Add Item" },
];


function showIndexPage(req, res) {
  res.render("index",{navbarLinks:navbarLinks});
}

module.exports = { showIndexPage ,navbarLinks};