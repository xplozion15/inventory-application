const { body } = require("express-validator");

const validateAddCategory = [
  body("category-name")
    .notEmpty()
    .withMessage("Please dont enter empty input for category name")
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
  body("category-name-updated")
    .notEmpty()
    .withMessage("Please dont enter empty input for category name")
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
    .notEmpty()
    .withMessage("Please dont enter empty input for item name")
    .isLength({ min: 2, max: 14 })
    .withMessage("Category name should be between 2 to 14 characters")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Name shouldnt have number in it"),
    body("item-quantity")
    .notEmpty()
    .isInt({min:1,max:9999})
    .withMessage("Quantity should be between 1 and 9999"),
    body("password").custom((value) => {
    if (value !== process.env.PASSWORD) {
      throw new Error("Password is incorrect");
    }
    return true;
  }),

]

const validateUpdateItem = [
    body("fruit-name-updated")
        .notEmpty()
    .withMessage("Please dont enter empty input for item name")
        .isLength({ min: 2, max: 14 })
    .withMessage("Item name should be between 2 to 14 characters")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Name shouldnt have number in it"),
    body("fruit-quantity-updated")
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
module.exports = { validateAddCategory,validateAddItem,validateDeleteCategory,validateAddCategory,validateUpdateCategory,validateUpdateItem,validateDeleteItem};
