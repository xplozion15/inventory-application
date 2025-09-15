const express = require("express");
const indexRouter = express.Router();
const indexController = require("../controllers/indexController.js");

indexRouter.get("/", indexController.showIndexPage);

module.exports = { indexRouter };
