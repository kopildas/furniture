import Products from "../models/Products.js";
import { StatusCodes } from "http-status-codes";
import BadReqError from "../errors/badREQerror.js";

const createProduct = async (req, res) => {
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
