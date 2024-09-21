const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: { type: String,  },
  image:{type:String,require:true},
  description: { type: String,  },
  Category:{ type: String,  },
  instructorID: { type: Schema.Types.ObjectId, ref: 'User',  },
  createdAt: { type: Date, default: Date.now },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
