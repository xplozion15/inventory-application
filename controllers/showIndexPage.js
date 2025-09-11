const navbarLinks = [
  { href: "/newcategory", text: "Add Category" },
  { href: "/newitem", text: "Add Item" },
];


function showIndexPage(req, res) {
  res.render("index",{navbarLinks:navbarLinks});
}

module.exports = { showIndexPage };
