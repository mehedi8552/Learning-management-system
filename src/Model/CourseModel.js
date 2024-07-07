const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: { type: String, required: true },
  image:{type:String,require:true},
  description: { type: String, required: true },
  Category:{ type: String, required: true },
  instructorID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
