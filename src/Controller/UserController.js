const { SignUpService, LoginService,viewAllUserService ,viewProfileServices,  UpdateUserDetailsService,
  ReadUserDetailsService} = require("../Services/AuthServices");

exports.SignUp = async (req, res) => {
  let result = await SignUpService(req);
  res.status(200).json(result);
};
exports.Login = async (req, res) => {
  let result = await LoginService(req,res);
  res.status(200).json(result);
};
exports.viewAllUsers = async (req, res) => {
  let result = await viewAllUserService(req);
  res.status(200).json(result);
};
exports.viewProfile = async (req, res) => {
  let result = await viewProfileServices(req);
  res.status(200).json(result);
};
exports.UserDetails = async (req, res) => {
  let result = await UpdateUserDetailsService(req);
  res.status(200).json(result);
};
exports.ReadUserDetails = async (req, res) => {
  let result = await ReadUserDetailsService(req);
  res.status(200).json(result);
};
// Content section---------------------------
exports.PhotoUpload = async (req, res) => {
  if(!req){
    console.log(req);
    return res.status(400).json({message:"No File Found"});
  }else{
    return res.status(200).json({message:"File Upload Success"});
  }
};