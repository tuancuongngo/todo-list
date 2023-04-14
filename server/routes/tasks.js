const Task = require("../models/task");
const express = require("express");
const router = express.Router(); // handle HTTP requests

router.post("/", async (req, res) => {
    const newTask = new Task(req.body);
    try {
        const savedTask = await newTask.save();
        res.status(200).json(savedTask);
        console.log(`[SUCCESS] Adding new Task to DB`);
    } catch (error) {
        res.status(500).json(error);
        console.log(`[FAILED] Adding new Task to DB`);
    }
});

router.get("/", async (req, res) => {
    try {
        const taskList = await Task.find({});
        res.status(200).json(pinList);
        console.log(`[SUCCESS] Retrieving all Tasks from DB`);
    } catch (error) {
        res.status(500).json(error);
        console.log(`[FAILED] Retrieving all Tasks from DB`);
    }
});

module.exports = router;
