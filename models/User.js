import mongoose from 'mongoose';

const register = mongoose.Schema(
    {
        name : String,
        email: {
            type: String,
            required: [true, 'Please Add Email'],
            unique: true,
            trim: true,
            lowercase: true,
            
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
            enum: ["Admin", "employee"],
            default: "employee" 
        },
        isActive : Boolean,
        createAt : Date,
        departmentID : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Departments'
        }
    },
);

export default mongoose.model('Users', register);