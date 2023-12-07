import Products from "../models/Products.js";
import { ReviewDB,ProductsMongoDb } from "../models/ProductsMongoDb.js";
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
console.log("reversedProducts")
  res.status(StatusCodes.OK).json({ product: reversedProducts });
};

const updateProduct = async (req, res) => {
  const productId = req.params.id; // Assuming you pass the product ID in the request parameters

  // Check if the product ID is valid (you can use a validation library or a custom validation function)
  if (!productId) {
    throw new BadReqError("Invalid product ID");
  }

  let featureProductValue = req.body; // Data to update the product

  let product = await Products.findOne({_id: productId})

  if(!product){
    throw new BadReqError(`No product with id ${productId}`);
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
    product = await Products.find();
  const reversedProducts = product.reverse(); // Reverse the order of products
console.log("reversedProducts")
  res.status(StatusCodes.OK).json({ product: reversedProducts });
    // res.status(StatusCodes.OK).json({ product: updatedProduct });
  } catch (error) {
    // Handle any errors that occur during the update process
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Unable to update the product" });
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  if (!productId) {
    throw new BadReqError("Invalid product ID");
  }

  try {
    const deletedProduct = await Products.findOneAndDelete(
      { _id: productId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!deletedProduct) {
      throw new BadReqError("Product not found");
    }

    // Retrieve the updated list of products after deletion
    const updatedProducts = await Products.find();
    const reversedProducts = updatedProducts.reverse();

    res.status(StatusCodes.OK).json({ product: reversedProducts });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Unable to delete the product" });
  }
};


const showStatsProduct = async (req, res) => {
  res.send("show stats bioooo");
};



const updateOrAddFieldToAllProducts = async (req, res) => {
  try {
    // const updateResult = await Products.find(
    //   {quantity: {$lt:100}},
    //   { $set: { offer: null } },
    //   { upsert: true }
    // );
    // const updateResult = await ProductsMongoDb.find({offer: {$lt:100}}).toArray();

    const updateResult = await ProductsMongoDb.updateMany({}, {$set:{"favorite": false}})

    if (!updateResult) {
      throw new BadReqError("Failed to update or add the field in all products");
    }
    console.log(updateResult);
    res.status(StatusCodes.OK).json({ product: updateResult });
    console.log(`Updated or added the field in products.`);
  } catch (error) {
    console.error(error);
    throw new BadReqError("Failed to update or add the field in all products");
  }
};






const createReview = async (req, res) => {
  const {
    item_id,
    user_id,
    user_name,
    user_pic,
    rating,
    review,
    date,
    
  } = req.body;

  if (
    !item_id ||
    !user_id ||
    !user_name ||
    !user_pic ||
    !rating ||
    !review ||
    !date
  ) {
    throw new BadReqError("Please provide all values");
  }

  // if (typeof sale !== 'number') {
  //   throw new BadReqError("Selling price should be lower than the regular price");
  // }
  

  const reviews = await ReviewDB.insertOne(req.body);

  res.status(StatusCodes.CREATED).json({ reviews });
};



const getReview = async (req, res) => {
  try {
    const itemId = req.params.id; // Assuming you pass the product ID in the request parameters

    // Check if the product ID is valid (you can use a validation library or a custom validation function)
    if (!itemId) {
      throw new BadReqError("Invalid product ID");
    }

    const reviews = await ReviewDB.find({ item_id: itemId }).toArray();

    console.log(reviews);

    res.status(StatusCodes.OK).json({ reviews: reviews });
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Internal Server Error" });
  }
};







export {
  createProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  showStatsProduct,
  updateOrAddFieldToAllProducts,
  createReview,
  getReview,
};
