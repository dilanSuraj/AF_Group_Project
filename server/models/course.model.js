import mongoose from 'mongoose';
import crypto from 'crypto';
import autoIncrement from 'mongoose-sequence';

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
        },
        facultyDet: {
            type: mongoose.Schema.ObjectId,
            ref: 'Faculty'
        }
    }
);

export default mongoose.model('Course',CourseSchema);