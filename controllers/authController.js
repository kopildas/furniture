import BadReqError from "../errors/badREQerror.js";
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
  res.status(StatusCodes.OK).json({ user:{name:user.name,lastname:user.lastname,email:user.email},token });
};
const login = async (req, res) => {
  res.send("login user");
};
const updateUser = async (req, res) => {
  res.send("update user");
};

export { register, login, updateUser };
