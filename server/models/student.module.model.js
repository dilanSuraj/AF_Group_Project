import mongoose from 'mongoose';
import crypto from 'crypto';
import autoIncrement from 'mongoose-sequence';

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

export default mongoose.model('StudentModule',StudentModuleSchema);