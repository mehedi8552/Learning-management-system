const router = require("express").Router();
const UserController = require("../Controller/UserController");
const { authenticateToken, authorizeRole } = require("../../authMiddleware");
router.get("/", (req, res) => {
  res.send("Auth Api running...");
});

router.post("/register", UserController.SignUp);
router.post("/login", UserController.Login);
router.get(
  "/viewAllUsers",
  authenticateToken,
  authorizeRole("viewAllUsers"),
  UserController.viewAllUsers
);
router.get(
  "/view-profile-by-id/:id",
  authenticateToken,
  authorizeRole("viewProfile"),
  UserController.viewProfile
);

// Save UserProfile Details------------------api
router.get(
  "/UpdateUserDetails/:UserId",
  authenticateToken,
  UserController.UserDetails
);
router.get(
  "/ReadUserDetails/:UserId",
  authenticateToken,
  UserController.ReadUserDetails
);
router.post(
  "/UpdateFile/:ContentID",
  authenticateToken,
  UserController.UpdateFile
);

module.exports = router;
