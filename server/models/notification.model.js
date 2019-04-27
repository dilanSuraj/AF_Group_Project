import mongoose from 'mongoose';
import crypto from 'crypto';
import autoIncrement from 'mongoose-sequence';
import properties from '../config/propertydb';

const NotificationSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            trim: true,
            required: 'Notification description field cannot be empty'
        }
    }
);

module.exports = mongoose.model('Notification',NotificationSchema,properties.database);
