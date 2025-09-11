const express = require('express')
require("dotenv").config();
const {indexRouter} = require("./routes/indexRouter");
const { categoriesRouter} = require('./routes/categoriesRouter.js');
const { itemsRouter } = require('./routes/itemsRouter.js');


const app = express()
const port = process.env.PORT || 3000;

app.use("/",indexRouter);
app.use("/categories",categoriesRouter);
app.use("/items",itemsRouter);


app.listen(port, () => {
  console.log(`Inventory app listening on port ${port}`)
})
