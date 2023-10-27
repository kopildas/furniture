import mongoose from "mongoose";
import validator from "validator";

const UserShema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please provide a name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  lastname: {
    type: String,
    default: "lastname",
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    require: [true, "Please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Please provide password"],
    minlength: 6,
  },
});

export default mongoose.model("User", UserShema);
