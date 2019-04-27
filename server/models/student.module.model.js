import mongoose from 'mongoose';
import crypto from 'crypto';
import autoIncrement from 'mongoose-sequence';
import properties from '../config/propertydb';

const StudentModuleSchema = new mongoose.Schema(
    {

        examId: {
            type: mongoose.Schema.ObjectId,
            ref: 'AssignmentExam'
        },
        studentId: {
            type: mongoose.Schema.ObjectId,
            ref: 'Student'
        }
    }
);

module.exports = mongoose.model('StudentModule',StudentModuleSchema,properties.database);