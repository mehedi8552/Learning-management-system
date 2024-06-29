const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
  {
    // ,present address,parmanent address,mobile,age,work
    prfile: {
      type: String,
    },
    PresentAddress: {
      type: String,
    },
    ParmanentAddress: {
      type: String,
    },
    Proffesion: {
      type: String,
    },
    mobile: {
      type: Number,
    },
    Age: {
      type: Number,
    },
  },
  { timestamps: true }
);

// Create the user model
const User = mongoose.model("UserDetails", UserDetailsSchema);

module.exports = User;
