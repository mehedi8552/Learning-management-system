const Course = require("../Model/CourseModel");
const Module = require("../Model/ModuleModel");
const mongoose = require("mongoose");
const multer = require("multer");
const ObjectId = mongoose.Types.ObjectId;

const CreateCourceService = async (req, res) => {
  try {
    const instructorID = req.params.instructorID;
    const { title, description, Category } = req.body;

    const course = new Course({
      title,
      description,
      instructorID,
      Category,
    });

    const newCourse = await course.save();

    return {
      status: "success",
      data: newCourse,
    };
  } catch (e) {
    return { status: "Faild", message: e.toString() };
  }
};

const ReadAllCourceService = async (req, res) => {
  try {
    const CourseData = await Course.find();
    return {
      status: "success",
      data: CourseData,
    };
  } catch (e) {
    return { status: "Faild", message: e.toString() };
  }
};

const UpdateCourceService = async (req, res) => {
  try {
    let CourceID = new ObjectId(req.params.CourceID);
    let reqbody = req.body;
    let data = await Course.findByIdAndUpdate(CourceID, reqbody);
    return {
      status: "success",
      data: data,
    };
  } catch (e) {
    return { status: "Faild", message: e.toString() };
  }
};

const ReadCourceByIdService = async (req, res) => {
  try {
    let CourceID = new ObjectId(req.params.CourceID);
    let ReadByIdData = await Course.findById(CourceID);
    return {
      status: "success",
      data: ReadByIdData,
    };
  } catch (e) {
    return { status: "Faild", message: e.toString() };
  }
};

const DeleteCourceService = async (req, res) => {
  try {
    let CourceID = new ObjectId(req.params.CourceID);
    let res = await Course.deleteMany({ _id: CourceID });
    if (res.deletedCount === 1) {
      return {
        status: "success",
        message: "Your course is removed",
      };
    } else {
      return {
        status: "Faild",
      };
    }
  } catch (e) {
    return { status: "Faild", message: e.toString() };
  }
};

// Course Modules Management Endpoints:
const CreateModuleService = async (req, res) => {
  try {
    const { title, description, CourceID } = req.body;
    const ModuleData = new Module({
      title,
      description,
      CourceID,
    });

    const newModule = await ModuleData.save();

    return {
      status: "success",
      data: newModule,
    };
  } catch (e) {
    return { status: "Faild", message: e.toString() };
  }
};

const ReadCourceByinsIDService = async (req, res) => {
  try {
    let InsID = new ObjectId(req.params.InsID);
    let ReadByIdData = await Course.find({ instructorID: InsID });
    return {
      status: "success",
      data: ReadByIdData,
    };
  } catch (e) {
    return { status: "Faild", message: e.toString() };
  }
};

const UpdateModuleService = async (req, res) => {
  try {
    let ModuleID = new ObjectId(req.params.ModuleID);
    let reqbody = req.body;
    let data = await Module.findByIdAndUpdate({ _id: ModuleID }, reqbody);
    return {
      status: "success",
      data: data,
    };
  } catch (e) {
    return { status: "Faild", message: e.toString() };
  }
};

const DeleteModuleService = async (req, res) => {
  try {
    let ModuleID = new ObjectId(req.params.ModuleID);
    let data = await Module.findByIdAndDelete({ _id: ModuleID });
    return {
      status: "success",
      data: data,
    };
  } catch (e) {
    return { status: "Faild", message: e.toString() };
  }
};

const ReadModuleByIdService = async (req, res) => {
  try {
    let ModuleID = new ObjectId(req.params.ModuleID);
    let ReadByIdData = await Module.find({ _id: ModuleID });
    return {
      status: "success",
      data: ReadByIdData,
    };
  } catch (e) {
    return { status: "Faild", message: e.toString() };
  }
};

const ReadAllModuleService = async (req, res) => {
  try {
    const ReadAllModule = await Module.find();
    return {
      status: "success",
      data: ReadAllModule,
    };
  } catch (e) {
    return { status: "Faild", message: e.toString() };
  }
};
// const ReadCourceByIdService = async (req, res) => {
//   try {

//     return {
//       status: "success",
//       data: ReadByIdData,
//     };
//   } catch (e) {
//     return { status: "Faild", message: e.toString() };
//   }
// };


//  পিকচার আপলোড করার জন্য স্টোরেজ সেটআপ
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploades/');
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});






module.exports = {
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

  storage
  
};
