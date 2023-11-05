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
  const product = await Products.find();
  const reversedProducts = product.reverse(); // Reverse the order of products

  res.status(StatusCodes.OK).json({ product: reversedProducts });
};

const updateProduct = async (req, res) => {
  const productId = req.params.id; // Assuming you pass the product ID in the request parameters

  // Check if the product ID is valid (you can use a validation library or a custom validation function)
  if (!productId) {
    throw new BadReqError("Invalid product ID");
  }

  let featureProductValue = req.body; // Data to update the product

  const product = await Products.findOne({_id: productId})

  if(!product){
    throw new BadReqError(`No job with id ${productId}`);
  }


  try {
    // Use Mongoose to find and update the product by ID
    const updateData = {
      feature_product: featureProductValue, // Specify the field you want to update and its new value
    };
    
    const updatedProduct = await Products.findOneAndUpdate(
      { _id: productId },
      req.body,
      { new: true,
      runValidators:true } // Return the updated document
    );

    if (!updatedProduct) {
      throw new BadReqError("Product not found");
    }

    res.status(StatusCodes.OK).json({ product: updatedProduct });
  } catch (error) {
    // Handle any errors that occur during the update process
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Unable to update the product" });
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id; // Assuming you pass the product ID in the request parameters

  // Check if the product ID is valid (you can use a validation library or a custom validation function)
  if (!productId) {
    throw new BadReqError("Invalid product ID");
  }

  try {
    // Use Mongoose to find and delete the product by ID
    const deletedProduct = await Products.findOneAndDelete({ _id: productId });

    if (!deletedProduct) {
      throw new BadReqError("Product not found");
    }

    res.status(StatusCodes.OK).json({ message: "Product deleted successfully" });
  } catch (error) {
    // Handle any errors that occur during the delete process
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Unable to delete the product" });
  }
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
