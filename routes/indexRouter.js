const express = require("express");
const indexRouter = express.Router();
const { showIndexPage } = require("../controllers/showIndexPage");





indexRouter.get("/", showIndexPage);

module.exports = { indexRouter };
