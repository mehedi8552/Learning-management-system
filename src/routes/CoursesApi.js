const router = require("express").Router();
const CourseController = require("../Controller/CourseController");
const { authenticateToken, authorizeRole } = require("../../authMiddleware");

router.get("/", (req, res) => {
  res.send("courses Api running...");
});

// Course Management---------------------------api
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
router.get("/ReadAllCource", CourseController.ReadAllCource);

router.post(
  "/DeleteCource/:CourceID",
  authenticateToken,
  authorizeRole("manageCourse"),
  CourseController.DeleteCource
);

router.get("/ReadCourceById/:CourceID", CourseController.ReadCourceById);

//Course Modules Management Endpoints---------------------------api

router.post(
  "/CreateModule",
  authenticateToken,
  authorizeRole("manageCourse"),
  CourseController.CreateModule
);
router.post(
  "/UpdateModule/:ModuleID",
  authenticateToken,
  authorizeRole("manageCourse"),
  CourseController.UpdateModule
);
router.post(
  "/DeleteModule/:ModuleID",
  authenticateToken,
  authorizeRole("manageCourse"),
  CourseController.DeleteModule
);
router.get("/ReadModuleById/:ModuleID", CourseController.ReadModuleById);
router.get("/ReadAllModule", CourseController.ReadAllModule);
router.get(
  "/ReadCourceByinsID/:InsID",
  authenticateToken,
  authorizeRole("manageCourse"),
  CourseController.ReadCourceByinsID
);

// Content Section---------------------------api

router.post(
  "/CreateFile",
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
router.get("/ReadFileById/:ContentID", CourseController.ReadFileById);
router.get("/ReadAllFile", CourseController.ReadAllFile);

// Filtering---------------------------api
router.get("/SearchByRemark/:keyword", CourseController.SearchByRemark);

module.exports = router;
