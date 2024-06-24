const router = require("express").Router();
const CourseController = require("../Controller/CourseController");
const CourseServices = require("../Services/CourseServices")
const { authenticateToken, authorizeRole } = require("../../authMiddleware");

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
router.get("/ReadAllCource",authenticateToken,CourseController.ReadAllCource);

router.post(
  "/DeleteCource/:CourceID",
  authenticateToken,
  authorizeRole("manageCourse"),
  CourseController.DeleteCource
);

router.get(
  "/ReadCourceById/:CourceID",
  CourseController.ReadCourceById
);



module.exports = router;
