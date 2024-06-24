const {
  CreateCourceService,
  ReadAllCourceService,
   ReadCourceByIdService,
   DeleteCourceService,
  UpdateCourceService,
} = require("../Services/CourseServices");

exports.CreateCource = async (req, res) => {
  let result = await CreateCourceService(req);
  res.status(200).json(result);
};
exports.ReadAllCource = async (req, res) => {
  let result = await ReadAllCourceService(req);
  res.status(200).json(result);
};
exports.UpdateCource = async (req, res) => {
  let result = await UpdateCourceService(req);
  res.status(200).json(result);
};
exports.DeleteCource = async (req, res) => {
  let result = await DeleteCourceService(req);
  res.status(200).json(result);
};
exports.ReadCourceById = async (req, res) => {
  let result = await ReadCourceByIdService(req);
  res.status(200).json(result);
};

