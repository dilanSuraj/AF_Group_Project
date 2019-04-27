const mongoose = require('mongoose');
const properties = require('../config/propertydb');

const CourseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: 'Course name field cannot be empty'
        },
        courseId: {
            type: String,
            required: 'Course Id field cannot be empty'
        }
        // ,
        // facultyDet: {
        //     type: mongoose.Schema.ObjectId,
        //     ref: 'Faculty'
        // }
    }
);

module.exports = mongoose.model('Course',CourseSchema,properties.database);
