const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  const product = await Product.create(req.body)
  product.image = (req.files)
  res.StatusCodes(StatusCodes.CREATED).json({product});
};
const getAllProducts = async (req, res) => {
  res.send("List of Products");
};

module.exports = {
  createProduct,
  getAllProducts,
};
