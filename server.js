const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
var cors = require("cors");
const ObjectId = mongoose.Types.ObjectId;
const User = require("./User");
const { authenticateToken, authorizeRole } = require("./authMiddleware");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
mongoose
  .connect(
    "mongodb+srv://user8552:user8552@cluster0.derptwk.mongodb.net/RoleAuthByGPT",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
app.get("/", async (req, res) => {
  res.send("Server Is Running");
});

// Register Route
app.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  //const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ name, email, password, role });

  try {
    await user.save();
    res.status(201).send("User Registered");
  } catch (error) {
    res.status(400).send("Error registering user");
  }
});

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  //var cookie = req.cookies.cookieName;
  const user = await User.findOne({ email, password });

  if (!user) return res.status(400).send("Email or password is wrong");

  //const validPassword = await bcrypt.compare(password, user.password);
  if (!password) return res.status(400).send("Invalid password");
  const token = jwt.sign({ _id: user._id, role: user.role }, "your_jwt_secret");

  // Configure the `token` HTTPOnly cookie
  let options = {
    maxAge: 1000 * 60 * 15, // expire after 15 minutes
    httpOnly: true, // Cookie will not be exposed to client side code
    sameSite: "none", // If client and server origins are different
    secure: true, // use with HTTPS only
  };

  let data = res.cookie("token", token, options);
  console.log(data);
  res.send("Login success! and Cookie has been set!");
});

// Protected Route for viewing all users (only superadmin and admin)
app.get(
  "/viewAllUsers",
  authenticateToken,
  authorizeRole("viewAllUsers"),
  async (req, res) => {
    const users = await User.find();
    res.send(users);
  }
);

// Protected Route for managing users (only superadmin and admin)
app.post(
  "/manageUsers",
  authenticateToken,
  authorizeRole("manageUsers"),
  (req, res) => {
    res.send("Manage Users");
  }
);

// Protected Route for managing comments (only superadmin and admin)
app.post(
  "/manageComments",
  authenticateToken,
  authorizeRole("manageComments"),
  (req, res) => {
    res.send("Manage Comments");
  }
);

// Protected Route for viewing profile (any authenticated user)
app.get(
  "/view-profile-by-id/:id",
  authenticateToken,
  authorizeRole("viewProfile"),
  async (req, res) =>   {
    let ProfileID= new ObjectId(req.params.id);
    const profileData = await User.findById({_id:ProfileID})
    // console.log(ProfileID);
    res.send(profileData);
  }
);

// Protected Route for viewing posts (only regular users)
app.get(
  "/viewPosts",
  authenticateToken,
  authorizeRole("viewPosts"),
  (req, res) => {
    res.send("View Posts");
  }
);

// Start Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
