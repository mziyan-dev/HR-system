import User from "../models/User.js";
import Task from "../models/Task.js";

export const createTask = async (req, res) => {
  try {
    const { assignedTo, content } = req.body;

    if (!assignedTo || !content) {
      return res.status(400).json({ message: "All fields required" });
    }

    const task = await Task.create({
      assignedTo,
      content
    });

    res.status(201).json({
      message: "Task created successfully",
      task
    });
  } catch (error) {
    res.status(500).json({
      message: "Task not created",
      error: error.message
    });
  }
};



export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({
      status: "true",
      message: "Task updated successfully",
      task: updatedTask
    });
  } catch (error) {
    res.status(500).json({
      message: "Task not updated",
      error: error.message
    });
  }
}

export const updateTaskStatus = async (req, res) => {
    try{
      const {id } = req.params;
      const { status } = req.body;
      const updatedTaskStatus = await Task.findByIdAndUpdate(id, { status }, { new: true });
      if(!updatedTaskStatus){
        return res.status(404).json({message: "Task not found"});
      }else{
        res.status(200).json({
          message: "Task status updated successfully",
          task: updatedTaskStatus
        });
      }
    }catch(error){
      res.status(500).json({
        message: "Task status not updated",
        error: error.message
      });
    }
  };

export const deleteTask = async (req, res) => {
  try {
    const {id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({
      message: "Task deleted successfully",
      task: deletedTask
    });
  } catch (error) {
    res.status(500).json({
      message: "Task not deleted",
      error: error.message
    });
  }
}



// GET ALL REGISTERED USERS
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json({
      totalUsers: users.length,
      users
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
