const {
  CreateCourceService,
  ReadAllCourceService,
   ReadCourceByIdService,
   DeleteCourceService,
  UpdateCourceService,


  CreateModuleService,
  ReadCourceByinsIDService,
  UpdateModuleService,
  DeleteModuleService,
  ReadModuleByIdService,
  ReadAllModuleService,

  FileUploadService,
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

exports.ReadModuleById = async (req, res) => {
  let result = await   ReadModuleByIdService(req);
  res.status(200).json(result);
};
exports.ReadAllModule = async (req, res) => {
  let result = await ReadAllModuleService(req);
  res.status(200).json(result);
};
exports.FileUpload = async (req, res) => {
  if(!req){
    console.log(req);
    return res.status(400).json({message:"No File Found"});
  }else{
    return res.status(200).json({message:"File Upload Success"});
  }
};