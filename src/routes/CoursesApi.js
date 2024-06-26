const router = require("express").Router();

const CourseController = require("../Controller/CourseController");
const CourseServices = require("../Services/CourseServices");
const { authenticateToken, authorizeRole } = require("../../authMiddleware");
const multer = require("multer");
// const upload = multer({ dest: 'uploades/' })
router.get("/", (req, res) => {
  res.send("courses Api running...");
});

// Course Management
router.post(
  "/createCource/:instructorID",
  authenticateToken,
  authorizeRole("manageCourse"),
  CourseController.CreateCource
);

router.post(
  "/UpdateCource/:CourceID",
  authenticateToken,
  authorizeRole("manageCourse"),
  CourseController.UpdateCource
);
router.get("/ReadAllCource", authenticateToken, CourseController.ReadAllCource);

router.post(
  "/DeleteCource/:CourceID",
  authenticateToken,
  authorizeRole("manageCourse"),
  CourseController.DeleteCource
);

router.get("/ReadCourceById/:CourceID", CourseController.ReadCourceById);

//Course Modules Management Endpoints:

router.post("/CreateModule", authenticateToken,  authorizeRole("manageCourse"), CourseController.CreateModule);
router.post("/UpdateModule/:ModuleID", authenticateToken,  authorizeRole("manageCourse"), CourseController.UpdateModule);
router.post("/DeleteModule/:ModuleID", authenticateToken,  authorizeRole("manageCourse"), CourseController.DeleteModule);
router.get("/ReadModuleById/:ModuleID", CourseController.ReadModuleById);
router.get("/ReadAllModule", CourseController.ReadAllModule);
router.get("/ReadCourceByinsID/:InsID", authenticateToken,  authorizeRole("manageCourse"), CourseController.ReadCourceByinsID);


// Content Section:
const upload = multer({ storage: CourseServices.storage });
router.post('/FileUpload',upload.array('image', 12),CourseController.FileUpload);


module.exports = router;
