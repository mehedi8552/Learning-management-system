const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Model/User");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const SignUpService = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    //const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password, role });
    await user.save();
    return { status: "success", data: "User Registered" };
  } catch (e) {
    return { status: "Faild", message: e.toString() };
  }
};

const LoginService = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (!user) return res.status(400).send("Email or password is wrong");

    //const validPassword = await bcrypt.compare(password, user.password);
    if (!password) return res.status(400).send("Invalid password");
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      "your_jwt_secret"
    );

    // Configure the `token` HTTPOnly cookie
    let options = {
      maxAge: 7 * 24 * 60 * 60 * 1000, // expire after 7 days
      httpOnly: true, // Cookie will not be exposed to client side code
      sameSite: "none", // If client and server origins are different
      secure: true, // use with HTTPS only
    };
    res.cookie("token", token, options);
    return {
      status: "success",
      data: "Login success! and Cookie has been set!",
    };
  } catch (e) {
    return { status: "Faild", message: e.toString() };
  }
};


const viewAllUserService = async (req, res) => {
  try {
    const users = await User.find();
    return {
      status: "success",
      data: users,
    };
  } catch (e) {
    return { status: "Faild", message: e.toString() };
  }
};

const viewProfileServices = async (req,res)=>{
  try{
    
    let ProfileID = new ObjectId(req.params.id);
    const profileData = await User.findById({ _id: ProfileID });
    return {
      status: "success",
      data: profileData,
    };
  }catch(e){
    return { status: "Faild", message: e.toString() };
  }
}
module.exports = {
  SignUpService,
  LoginService,
  viewAllUserService,
  viewProfileServices
};
