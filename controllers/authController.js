import BadReqError from "../errors/badREQerror.js";
import UnAuthenticatedError from "../errors/unauthenticated.js";
import Users from "../models/Users.js";
import { StatusCodes } from "http-status-codes";


const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadReqError("Please provide all values");
  }
  const ExistedUser = await Users.findOne({email})
  if(ExistedUser)
  {
    console.log(ExistedUser);
    throw new BadReqError("Email is already used by another user");
  }
  
  const user = await Users.create(req.body);
  
  const token = user.createJWT()
  res.status(StatusCodes.CREATED).json({ user:{id:user._id,name:user.name,lastname:user.lastname,email:user.email,phone:user.phone,picture:user.picture},token });
};


const login = async (req, res) => {
  console.log(req.body)
  const {email,password} = req.body
  if(!email || !password){
    throw new BadReqError("Please provide all value");
  }

  // const user = await Users.findByEmailAndPassword(email, password)
  const user = await Users.findOne({email}).select('+password')
  if(!user) {
    throw new UnAuthenticatedError('User is not valid')
  }

  const isPassCorrect = await user.compPass(password)
  if(!isPassCorrect) {
    throw new UnAuthenticatedError('Password is not correct')
  }

  const token = user.createJWT()
  user.password = undefined
  res.status(StatusCodes.OK).json({user,token});
};
const updateUser = async (req, res) => {
 
    const userId = req.params.id; // Assuming you pass the product ID in the request parameters
  console.log(userId)
    // Check if the product ID is valid (you can use a validation library or a custom validation function)
    if (!userId) {
      throw new BadReqError("Invalid product ID");
    }
  
    let featureProductValue = req.body; // Data to update the product
  console.log(featureProductValue)
    const user = await Users.findOne({_id: userId})
  
    if(!user){
      throw new BadReqError(`No user with id ${userId}`);
    }
  
  
    try {
      // Use Mongoose to find and update the user by ID
      const updateData = {
        feature_product: featureProductValue, // Specify the field you want to update and its new value
      };
      
      const updatedProduct = await Users.findOneAndUpdate(
        { _id: userId },
        req.body,
        { new: true,
        runValidators:true } // Return the updated document
      );
  
      if (!updatedProduct) {
        throw new BadReqError("Product not found");
      }
  
      res.status(StatusCodes.OK).json({ user: updatedProduct });
    } catch (error) {
      // Handle any errors that occur during the update process
      console.error(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Unable to update the product" });
    }
  };

const getall = async (req, res) => {
  const product = await Users.find();

  const reversedProducts = product.reverse(); 
  res.status(StatusCodes.OK).json({ product: reversedProducts });
};

export {getall, register, login, updateUser };
