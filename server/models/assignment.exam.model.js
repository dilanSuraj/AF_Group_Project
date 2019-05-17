const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const properties = require('../config/propertydb');

const AssignmentExamSchema = new Schema(
    {
        examId: {
            type: String,
            required: 'ID field cannot be empty'
        },
        description: {
            type: String,
            trim: true,
            required: 'Description field cannot be empty'
        },
        moduleId: {
            type: String
        },
        typeOfExam: {
            type: String,
            trim: true,
            enum: ['CA','FINAL']
        },
        marks: {
             type: String
        },
        deadlineDate: {
            type: String
        }
    }
);

mongoose.model('AssignmentExamSchema', AssignmentExamSchema);

module.exports = mongoose;
