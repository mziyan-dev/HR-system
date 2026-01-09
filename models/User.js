import mongoose from 'mongoose';
// import validator from 'validator';

const register = mongoose.Schema(
    {
        name : String,
        email: {
            type: String,
            required: [true, 'Please Add Email'],
            unique: true,
            trim: true,
            lowercase: true,
            // validate: [validator.isEmail, 'Please provide a valid email'],
        },
        password: {
            type: String,
            required: [true, 'Please Add Password'],
            minlength: 8,
            trim: true,
        },
        isPasswordChanged: {
            type: Boolean,
            default: false
        },
        role : {
            type : String,
            enum: ['Admin', 'employee'],
            default: 'employee' 
        },
        isActive : Boolean,
        createAt : Date 
    },
);

export default mongoose.model('Users', register);