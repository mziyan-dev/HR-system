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
