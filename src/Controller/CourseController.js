const {
  // CreateCourceService,
  ReadAllCourceService,
  ReadCourceByIdService,
  DeleteCourceService,
  UpdateCourceService,

  CreateModuleService,
  ReadCourceByinsIDService,
  UpdateModuleService,
  DeleteModuleService,
  ReadModuleByModuleIdService,
  ReadModuleByCourseIdService,
  ReadAllModuleService,

  CreateFileService,
  UpdateFileService,
  DeleteFileService,
  ReadFileByIdService,
  ReadAllFileService,

  SearchByRemarkService,
} = require("../Services/CourseServices");

// exports.CreateCource = async (req, res) => {
//   let result = await CreateCourceService(req);
//   res.status(200).json(result);
// };
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

// Course Modules Management Endpoints:
exports.CreateModule = async (req, res) => {
  let result = await CreateModuleService(req);
  res.status(200).json(result);
};
exports.ReadCourceByinsID = async (req, res) => {
  let result = await ReadCourceByinsIDService(req);
  res.status(200).json(result);
};
exports.UpdateModule = async (req, res) => {
  let result = await UpdateModuleService(req);
  res.status(200).json(result);
};
exports.DeleteModule = async (req, res) => {
  let result = await DeleteModuleService(req);
  res.status(200).json(result);
};

exports.ReadModuleByCourseId = async (req, res) => {
  let result = await ReadModuleByCourseIdService(req);
  res.status(200).json(result);
};
exports.ReadModuleByModuleId = async (req, res) => {
  let result = await ReadModuleByModuleIdService(req);
  res.status(200).json(result);
};
exports.ReadAllModule = async (req, res) => {
  let result = await ReadAllModuleService(req);
  res.status(200).json(result);
};

exports.CreateFile = async (req, res) => {
  let result = await CreateFileService(req);
  res.status(200).json(result);
};
exports.UpdateFile = async (req, res) => {
  let result = await UpdateFileService(req);
  res.status(200).json(result);
};
exports.DeleteFile = async (req, res) => {
  let result = await DeleteFileService(req);
  res.status(200).json(result);
};
exports.ReadFileById = async (req, res) => {
  let result = await ReadFileByIdService(req);
  res.status(200).json(result);
};
exports.ReadAllFile = async (req, res) => {
  let result = await ReadAllFileService(req);
  res.status(200).json(result);
};

exports.SearchByRemark = async (req, res) => {
  let result = await SearchByRemarkService(req);
  res.status(200).json(result);
};
