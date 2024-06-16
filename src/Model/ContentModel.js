const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Content schema
const contentSchema = new Schema({
  content_id: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
    auto: true,
  },
  module_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Module',  // Assuming you have a Module model
  },
  type: {
    type: String,
    required: true,
    enum: ['video', 'pdf'],
  },
  title: {
    type: String,
    default: '',
  },
  url: {
    type: String,
    default: '',
  },
  file_path: {
    type: String,
    default: '',
  }
}, {
  timestamps: true
});

// Create the Content model
const Content = mongoose.model('Content', contentSchema);

module.exports = Content;
