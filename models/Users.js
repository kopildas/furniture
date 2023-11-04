import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  lastname: {
    type: String,
    default: "",
    maxlength: 20,
    trim: true,
  },
  image: {
    type: String,
    default: null,

  },
  purchased_product: {
    type: Number,
    default: 0,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
    select: false,
  },
  location: {
    type: String,
    default: "",
    maxlength: 20,
    trim: true,
  },
  phone: {
    type: String,
    maxlength: 11,
    default: "01700000000",
  },
});

UserSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function () {
  return jwt.sign({userID:this._id} ,process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPITIME})
}

UserSchema.methods.compPass = async function(providedPass){
  const isMatch = await bcrypt.compare(providedPass,this.password)
  return isMatch
}

export default mongoose.model("User", UserSchema);
