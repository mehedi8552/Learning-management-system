const mongoose = require("mongoose");
const { Schema } = mongoose;

const contentSchema = new Schema(
  {
    ModuleID: {
      type: Schema.Types.ObjectId,
    },
    image: {
      type: String,
    },
    title: {
      type: String,
      default: "",
    },
    URL: {
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
