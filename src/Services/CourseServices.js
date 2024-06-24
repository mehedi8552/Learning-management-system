const Course = require("../Model/CourseModel");
const mongoose = require("mongoose");
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
        message: "Your course is removed"
      };
    } else {
      return {
        status: "Faild"
      };
    }
  } catch (e) {
    return { status: "Faild", message: e.toString() };
  }
};

module.exports = {
  CreateCourceService,
  ReadAllCourceService,
  ReadCourceByIdService,
  DeleteCourceService,
  UpdateCourceService,
};
