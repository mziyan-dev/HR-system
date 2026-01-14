import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    assignedTo: [
      {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users", 
      required: true,
    }
  ],
    content: {
      type: String,
      required: true,
      trim: true
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
    },
    DepartmentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Departments',
    required: true
  }
  },
  {
    timestamps: true 
  },
 
);

const Task = mongoose.model("Task", taskSchema);
export default Task;
