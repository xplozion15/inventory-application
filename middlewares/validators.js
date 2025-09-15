const { body } = require("express-validator");

const validateAddCategory = [
  body("category-name")
    .isLength({ min: 2, max: 14 })
    .withMessage("Category name should be between 2 to 14 characters")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Name shouldnt have number in it"),
  body("password").custom((value) => {
    if (value !== process.env.PASSWORD) {
      throw new Error("Password is incorrect");
    }
    return true;
  }),
];

const validateUpdateCategory = [
  body("updated-category-name")
    .isLength({ min: 2, max: 14 })
    .withMessage("Category name should be between 2 to 14 characters")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Name shouldnt have number in it"),
  body("password").custom((value) => {
    if (value !== process.env.PASSWORD) {
      throw new Error("Password is incorrect");
    }
    return true;
  }),
];

const validateDeleteCategory = [
     body("password").custom((value) => {
    if (value !== process.env.PASSWORD) {
      throw new Error("Password is incorrect");
    }
    return true;
  }),
]

const validateAddItem = [
    body("item-name")
    .isLength({ min: 2, max: 14 })
    .withMessage("Category name should be between 2 to 14 characters")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Name shouldnt have number in it"),
    body("item-quantity")
    .isInt({min:1,max:9999})
    .withMessage("Items added should be between 1 and 9999"),
    body("password").custom((value) => {
    if (value !== process.env.PASSWORD) {
      throw new Error("Password is incorrect");
    }
    return true;
  }),

]

const validateUpdateItem = [
    body("fruit-name-updated")
        .isLength({ min: 2, max: 14 })
    .withMessage("Category name should be between 2 to 14 characters")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Name shouldnt have number in it"),
    body("item-quantity")
    .isInt({min:1,max:9999})
    .withMessage("Items added should be between 1 and 9999"),
    body("password").custom((value) => {
    if (value !== process.env.PASSWORD) {
      throw new Error("Password is incorrect");
    }
    return true;
  }),

]


const validateDeleteItem = [
     body("password").custom((value) => {
    if (value !== process.env.PASSWORD) {
      throw new Error("Password is incorrect");
    }
    return true;
  }),
]
module.exports = { validateAddCategory };
