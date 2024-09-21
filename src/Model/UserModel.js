const mongoose = require('mongoose');


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
    phone: {
        type: Number,
    },
    address: {
        type: String,

    },
    city: {
        type: String,

    },
    district: {
        type: String,
    },
    village: {
        type: String,

    },
    dob: {
        type: Date,
    },
    gender: {
        type: String,
    },
    education: {
        type: String,
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
