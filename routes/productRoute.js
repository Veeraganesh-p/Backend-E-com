const express = require("express");
const {
  getProduct,
  getProductById,
  postProduct,
  deleteProduct,
  updateProduct
} = require("../controller/productController");

const router = express.Router();

// GET all products
router.get("/", getProduct);

// GET single product by ID
router.get("/:id", getProductById);

// POST new product
router.post("/", postProduct);

// DELETE product by id
router.delete("/:id", deleteProduct);

// UPDATE product by id
router.put("/:id", updateProduct);

module.exports = router;
