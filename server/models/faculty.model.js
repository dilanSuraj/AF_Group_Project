import mongoose from 'mongoose';
import crypto from 'crypto';
import autoIncrement from 'mongoose-sequence';

const FacultySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: 'Faculty name field cannot be empty'
        },
        facultyId: {
            type: String,
            required: 'Faculty Id field cannot be empty'
        },
        facultyHeadDet: {
            type: mongoose.Schema.ObjectId,
            ref: 'OtherUser'
        }
    }
);

export default mongoose.model('Faculty',FacultySchema);