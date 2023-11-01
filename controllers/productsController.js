import Products from "../models/Products.js";
import { StatusCodes } from "http-status-codes";
import BadReqError from "../errors/badREQerror.js";

const createProduct = async (req, res) => {
  const {
    item_name,
    category,
    quantity,
    cartORadd,
    sale,
    SKU,
    price,
    short_descrip,
    full_descrip,
    image,
    gal_1_imgURL,
    gal_2_imgURL,
    gal_3_imgURL,
  } = req.body;

  if (
    !item_name ||
    !category ||
    !quantity ||
    !cartORadd ||
    !quantity ||
    !sale ||
    !SKU ||
    !price ||
    !short_descrip ||
    !full_descrip ||
    !image 
  ) {
    throw new BadReqError("Please provide all values");
  }

  // if (typeof sale !== 'number') {
  //   throw new BadReqError("Selling price should be lower than the regular price");
  // }
  

  const product = await Products.create(req.body);

  res.status(StatusCodes.CREATED).json({ product });
};
const getAllProduct = async (req, res) => {
  res.send("get all products");
};
const updateProduct = async (req, res) => {
  res.send("update products");
};
const deleteProduct = async (req, res) => {
  res.send("delete products");
};
const showStatsProduct = async (req, res) => {
  res.send("show stats");
};

export {
  createProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  showStatsProduct,
};
