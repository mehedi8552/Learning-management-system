const express = require("express");

const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
var cors = require("cors");



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


app.use("/auth",require("./src/routes/UserApi"));//Auth api
app.use("/courses",require("./src/routes/CoursesApi"));//Auth api


// Start Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
