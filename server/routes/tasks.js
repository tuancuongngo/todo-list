const Task = require("../models/task");
const express = require("express");
const router = express.Router(); // handle HTTP requests

// CRUD: Create, Read, Update, Delete

// CREATE
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

// READ
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

// UPDATE
router.put("/:id", async (req, res) => {
    try {
        const modTask = await Task.findOneAndUpdate({ _id: req.params.id }, req.body);
        res.status(200).json(modTask);
        console.log(`[SUCCESS] Updating the specified Task from DB`);
    } catch (error) {
        res.status(500).json(error);
        console.log(`[FAILED] Updating the specified Task from DB`);
    }
});

// DELETE
router.delete("/:id", async (req, res) => {
    try {
        const delTask = await Task.findByIdAndDelete(req.params.id);
        res.status(200).json(delTask);
        console.log(`[SUCCESS] Deleting the specified Task from DB`);
    } catch (error) {
        res.status(500).json(error);
        console.log(`[FAILED] Deleting the specified Task from DB`);
    }
});

module.exports = router;
