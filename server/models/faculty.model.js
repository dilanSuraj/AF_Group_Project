import mongoose from 'mongoose';
import crypto from 'crypto';
import autoIncrement from 'mongoose-sequence';
import properties from '../config/propertydb';

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

module.exports = mongoose.model('Faculty',FacultySchema,properties.database);

