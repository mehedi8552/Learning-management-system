const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Module schema
const moduleSchema = new Schema(
  {
    image: {
      type: String,
    },
    CourceID: {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Module = mongoose.model("Module", moduleSchema);

module.exports = Module;
