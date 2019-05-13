const mongoose = require('mongoose');
// import crypto from 'crypto';
// import autoIncrement from 'mongoose-sequence';
const properties = require('../config/propertydb');

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
    // {

    //     examId: {
    //         type: String,
    //         ref: 'AssignmentExam'
    //     },
    //     studentId: {
    //         type: String,
    //         ref: 'Student'
    //     }
    // }
);

module.exports = mongoose.model('StudentModule',StudentModuleSchema);