import User from "../models/User.js";
import Task from "../models/Task.js";

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


export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      status: "true",
      message: "User updated successfully",
      user: updatedUser
    });
  } catch (error) {
    res.status(500).json({
      message: "User not updated",
      error: error.message
    });
  }
}

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User deleted successfully",
      user: deletedUser
    });
  } catch (error) {
    res.status(500).json({
      message: "User not deleted",
      error: error.message
    });
  }
}