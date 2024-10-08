const router = require("express").Router();
const Course = require("../Model/CourseModel");
const CourseController = require("../Controller/CourseController");
const { authenticateToken, authorizeRole } = require("../../authMiddleware");
const multer = require("multer");
router.get("/", (req, res) => {
  res.send("courses Api running...");
});

// Course Management---------------------------api

// router.post(
//   "/createCource/:instructorID",
//   authenticateToken,
//   authorizeRole("manageCourse"),
//   CourseController.CreateCource
// );
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
router.post("/createCource/:instructorID",
  authenticateToken,
  authorizeRole("manageCourse"),
  upload.single("image"),
  async (req, res) => {
    try {    

      const data = new Course({
        image: req.file?.buffer.toString("base64"),
        title: req.body.title,
        description: req.body.description,
        instructorID: req.params.instructorID,
        Category: req.body.Category,
      });
     let Viewdata = await data.save();
      return {
        status: "success",
        data: Viewdata,
      };
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
);
router.post("/UpdateCource/:CourceID",
  authenticateToken,
  authorizeRole("manageCourse"),
  CourseController.UpdateCource
);
router.get("/ReadAllCource", CourseController.ReadAllCource);

router.post("/DeleteCource/:CourceID",
  authenticateToken,
  authorizeRole("manageCourse"),
  CourseController.DeleteCource
);
router.get("/ReadCourceById/:CourceID", CourseController.ReadCourceById);//by Course id

router.get("/ReadCourceByInsId/:InsID", CourseController.ReadCourceByinsID);//by instractor id

//Course Modules Management Endpoints---------------------------api

router.post("/CreateModule/:CourceID",
  authenticateToken,
  authorizeRole("manageCourse"),
  CourseController.CreateModule
);
router.post("/UpdateModule/:ModuleID",
  authenticateToken,
  authorizeRole("manageCourse"),
  CourseController.UpdateModule
);
router.post("/DeleteModule/:ModuleID",
  authenticateToken,
  authorizeRole("manageCourse"),
  CourseController.DeleteModule
);
router.get("/ReadModuleByCourseId/:CourceID", CourseController.ReadModuleByCourseId);

router.get("/ReadModuleByModuleId/:ModuleID", CourseController.ReadModuleByModuleId);

router.get("/ReadAllModule", CourseController.ReadAllModule);



// Content Section---------------------------api

router.post(
  "/CreateFile/:ModuleID",
  authenticateToken,
  authorizeRole("manageCourse"),
  CourseController.CreateFile
);
router.post(
  "/DeleteFile/:ContentID",
  authenticateToken,
  authorizeRole("manageCourse"),
  CourseController.DeleteFile
);
router.get("/ReadByFileId/:ContentID", CourseController.ReadByFileId);
router.get("/ReadByModuleId/:ModuleId", CourseController.ReadByModuleId);
router.get("/ReadAllFile", CourseController.ReadAllFile);

// Filtering---------------------------api
router.get("/SearchByRemark/:keyword", CourseController.SearchByRemark);

module.exports = router;
