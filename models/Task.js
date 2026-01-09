import mongoose from "mongoose";




const taskSchema = mongoose.Schema({
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId, ref: "User",
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
    content: { 
        type: String, required: true 
    },
    status: {
    type: String,
    enum: ['pending','in-progress','completed'],
    default: 'pending',
    }
});




const task = mongoose.model("Task", taskSchema);

export default task;