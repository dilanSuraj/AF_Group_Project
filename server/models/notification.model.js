import mongoose from 'mongoose';
import crypto from 'crypto';
import autoIncrement from 'mongoose-sequence';

const NotificationSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            trim: true,
            required: 'Notification description field cannot be empty'
        }
    }
);

export default mongoose.model('Notification',NotificationSchema);