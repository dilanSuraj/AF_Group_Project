import mongoose from 'mongoose';
import crypto from 'crypto';
import properties from '../config/propertydb';

const StudentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: 'Name field cannot be empty'
        },
        userName: {
            type: String,
            trim: true,
            required: 'Username field cannot be empty'
        },
        hashed_password: {
            type: String,
            required: 'Password field cannot be empty'
        },
        email: {
            type: String,
            trim: true,
            unique: 'Email already exists',
            match: [/.+\@.+\..+/, 'Please enter a valid email address'],
            required: 'Email is required'
        },
        admissionYear: {
            type: Date,
            default: Date.now
        },
        gpa: [
            {
                semesterNumber: Number,
                gpaValue: Number
            }
        ],
        facultyDet: {
            type: mongoose.Schema.ObjectId,
            ref: 'Faculty'
        },
        courseDet: {
            type: mongoose.Schema.ObjectId,
            ref: 'Course'
        }
    }
);

module.exports = mongoose.model('Student',StudentSchema,properties.database);