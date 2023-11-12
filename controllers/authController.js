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
  res.status(StatusCodes.CREATED).json({ user:{id:user._id,name:user.name,lastname:user.lastname,email:user.email},token,picture:user.picture });
};


const login = async (req, res) => {
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
  res.send("update user");
};

const getall = async (req, res) => {
  const product = await Users.find();

  res.status(StatusCodes.OK).json({ product });
};

export {getall, register, login, updateUser };
