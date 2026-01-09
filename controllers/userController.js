import task from "../models/Task";




export async function createTask(req , res) {
    try {
        const task = new task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
} 