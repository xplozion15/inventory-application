const express = require("express");
require("dotenv").config();
const path = require("node:path");

const { indexRouter } = require("./routes/indexRouter");
const { categoriesRouter } = require("./routes/categoriesRouter.js");
const { itemsRouter } = require("./routes/itemsRouter.js");

const app = express();
const port = process.env.PORT || 3000;

//ejs template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//static assets serving
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));



app.use("/", indexRouter);
app.use("/categories", categoriesRouter);
app.use("/items", itemsRouter);

app.listen(port, () => {
  console.log(`Inventory app listening on port ${port}`);
});


