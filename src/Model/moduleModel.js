const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Module schema
const moduleSchema = new Schema({

  CourceID: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
});

const Module = mongoose.model('Module', moduleSchema);

module.exports = Module;
