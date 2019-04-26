import mongoose from 'mongoose';
import crypto from 'crypto';

const OtherUserSchema = new mongoose.Schema(
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
        role: {
          type: String,
          enum: ['ADMIN','INSTRUCTOR','FACULTY_HEAD']
        },
        JoinedDate: {
            type: Date,
            default: Date.now
        },
        gpa: [
            {
                semesterNumber: Number,
                gpaValue: Number
            }
        ],
        qualifications:{
          type: String
        },
        facultyDet: {
            type: mongoose.Schema.ObjectId,
            ref: 'Faculty'
        },
        moduleDet: {
            type: mongoose.Schema.ObjectId,
            ref: 'Module'
        }
    }
);

export default mongoose.model('OtherUser',OtherUserSchema);