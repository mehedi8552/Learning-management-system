const { createCourceService, LoginService } = require("../Services/CourseServices");

exports.createCource = async (req, res) => {
  let result = await createCourceService(req);
  res.status(200).json(result);
};
// exports.Login = async (req, res) => {
//   let result = await LoginService(req);
//   res.status(200).json(result);
// };