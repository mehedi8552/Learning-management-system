const { SignUpService, LoginService,viewAllUserService ,viewProfileServices} = require("../Services/AuthServices");

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