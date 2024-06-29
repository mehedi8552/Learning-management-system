const mongoose = require("mongoose");
const { Schema } = mongoose;

const contentSchema = new Schema(
  {
    moduleID: {
      type: Schema.Types.ObjectId,
      ref: "Module", 
    },
    UserID: {
      type: Schema.Types.ObjectId,
      ref: "Module", 
    },
    title: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

// Create the Content model
const Content = mongoose.model("Content", contentSchema);

module.exports = Content;
