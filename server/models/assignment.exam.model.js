import mongoose from 'mongoose';
import crypto from 'crypto';
import autoIncrement from 'mongoose-sequence';
import properties from '../config/propertydb';


const AssignmentExamSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            trim: true,
            required: 'Description field cannot be empty'
        },
        moduleId: {
            type: mongoose.Schema.ObjectId,
            ref: 'Module'
        },
        typeOfExam: {
            type: String,
            trim: true,
            enum: ['CA','FINAL']
        },
        marks: {
             type: Number,
             fullMarks:{
                type:  Number
             }
        },
        deadlineDate: {
            type: Date,
            default: Date.now
        }
    }
);


module.exports = mongoose.model('AssignmentExam', AssignmentExamSchema,properties.database);
