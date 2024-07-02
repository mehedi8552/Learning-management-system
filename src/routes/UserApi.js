const router = require("express").Router();
const multer = require("multer");
const UserController = require("../Controller/UserController");
const AuthServices = require("../Services/AuthServices");
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
const upload = multer({ storage: AuthServices.storage });
router.post(
  "/PhotoUpload",
  upload.array("image", 12),
  UserController.PhotoUpload
);

module.exports = router;
