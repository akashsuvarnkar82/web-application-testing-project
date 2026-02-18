const express = require("express");
const router = express.Router();
const Task = require("../models/Task");


// ADD TASK
router.post("/add", async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }

        const newTask = new Task({ title, description });
        await newTask.save();

        res.status(201).json({ message: "Task added successfully" });

    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});


// GET ALL TASKS
router.get("/all", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});


// UPDATE TASK
router.put("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;

        await Task.findByIdAndUpdate(id, req.body);

        res.status(200).json({ message: "Task updated successfully" });

    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});


// DELETE TASK
router.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;

        await Task.findByIdAndDelete(id);

        res.status(200).json({ message: "Task deleted successfully" });

    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
