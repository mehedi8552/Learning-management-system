const express = require("express");
require('dotenv').config()
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
var cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({
  credentials:true,
  origin:"http://localhost:5173"
}));
app.use(cookieParser());
mongoose
  .connect(
    "mongodb+srv://user8552:user8552@cluster0.derptwk.mongodb.net/RoleAuthByGPT",
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
app.get("/", async (req, res) => {
  res.send("Root Server Is Running");
});


app.use("/auth",require("./src/routes/UserApi"));//Auth api
app.use("/courses",require("./src/routes/CoursesApi"));//Courses Api


// Start Server
let PORT = 3000;
app.listen(process.env.PORT || 10000, '0.0.0.0', () => {
  console.log(`Server running on port ${process.env.PORT || 10000}`);
});

