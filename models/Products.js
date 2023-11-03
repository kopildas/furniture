import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const ProductSchema = new mongoose.Schema({
  item_name: {
    type: String,
    required: [true, "Please provide a name"],
    minlength: 3,
    maxlength: 190,
    trim: true,
  },
  sale: {
    type: Number,
    maxlength: 20,
  },
  price: {
    type: Number,
    maxlength: 20,
  },
  category: {
    type: String,
    required: [true, "Please provide a category"],
    minlength: 3,
    maxlength: 190,
    trim: true,
  },
  quantity: {
    type: Number,
    maxlength: 20,
  },
  cartORadd: {
    type: String,
    required: [true, "Please provide password"],
    maxlength: 36,
    default: "cart",
  },
  SKU: {
    type: String,
    required: [true, "Please provide password"],
    maxlength: 36,
  },
  short_descrip: {
    type: String,
    required: [true, "Please provide password"],
    maxlength: 500,
  },
  full_descrip: {
    type: String,
    required: [true, "Please provide password"],
    maxlength: 2000,
  },
  image: {
    type: String,
    default: null,
    maxlength: 100,
  },
  gal_1_imgURL: {
    type: String,
    default: null,
    maxlength: 100,
  },
  gal_2_imgURL: {
    type: String,
    default: null,
    maxlength: 100,
  },
  gal_3_imgURL: {
    type: String,
    default: null,
    maxlength: 100,
  },
  rating :{
    type: Number,
    default: 0,
  },
  review_number :{
    type: Number,
    default: 0,
  },
  purchasing_number :{
    type: Number,
    default: 0,
  },
  feature_product : {
    type: Boolean,
    default: false,
  }

});



export default mongoose.model("Products", ProductSchema);
