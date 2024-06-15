const router = require("express").Router();
const CourseController = require('../Controller/CourseController');
const { authenticateToken, authorizeRole } = require("../../authMiddleware");


router.get("/", (req, res) => {
  res.send("courses Api running...");
});

router.post('/createCource/:instructorID',  authenticateToken,
    authorizeRole("createPost"),CourseController.createCource);
router.post('/login',CourseController.Login);
// Register Route

// Login Route


module.exports = router;