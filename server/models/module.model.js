import mongoose from 'mongoose';
import crypto from 'crypto';
import autoIncrement from 'mongoose-sequence';
import properties from '../config/propertydb';

const ModuleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: 'Module name field cannot be empty'
        },
        moduleId: {
            type: String,
            required: 'Password field cannot be empty'
        },
        facultyDet: {
            type: mongoose.Schema.ObjectId,
            ref: 'Faculty'
        },
        instructorDet: {
            type: mongoose.Schema.ObjectId,
            ref: 'OtherUser'
        }
    }
);

module.exports = mongoose.model('Module',ModuleSchema,properties.database);
