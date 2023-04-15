const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    timestamp: {
        type: String,
        default: Date.now(),
    },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
