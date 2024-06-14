const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['superadmin', 'admin', 'user'],
        default: 'user'
    }
}, { timestamps: true });

// Create the user model
const User = mongoose.model('User', userSchema);

module.exports = User;
