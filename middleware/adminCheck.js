import userModel from "../models/User.js";

export const adminCheck = (req, res, next) => {
    if (req.user && req.user.role === "Admin") {
        next(); 
    } else {
        return res.status(403).json({ message: "Access denied. Admins only." });
    }
}