import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Task from "./components/Task";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const taskCompleted = (taskName) => {
    toast.success("[TASK COMPLETED] '" + taskName + "'");
};

const taskDeleted = (taskName) => {
    toast.info("[TASK DELETED] '" + taskName + "'");
};

function App() {
    const [tasks, setTasks] = useState([]);
    // const [popupToggle, setPopupToggle] = useState(false);
    const [taskInput, setTaskInput] = useState("");

    useEffect(() => {
        const getTasks = async () => {
            try {
                const response = await axios.get("http://localhost:4444/api/tasks");
                console.log(response);
                setTasks(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        getTasks();
    }, []);

    const addTask = async (event) => {
        console.log(taskInput);
        event.preventDefault();

        const newTask = {
            taskName: taskInput,
            completed: false,
            timeStamp: "test",
        };

        try {
            const response = await axios.post("http://localhost:4444/api/tasks", newTask);
            setTasks([...tasks, response.data]);
            setTaskInput("");
        } catch (error) {
            console.log(error);
        }
    };

    function handleChange(event) {
        const newValue = event.target.value;
        setTaskInput(newValue);
    }

    return (
        <div className="App">
            <ToastContainer position="top-right" theme="colored" hideProgressBar={false} autoClose={2000} />
            <h1>Welcome back</h1>
            <h4>Current TODO List</h4>
            <div className="taskForm">
                <input onChange={handleChange} type="text" value={taskInput} />
                <button onClick={addTask}>
                    <span>Add</span>
                </button>
            </div>
            <div className="todoArea">
                {tasks.map((task) => (
                    <Task
                        taskInfo={task}
                        setTasks={setTasks}
                        key={task._id}
                        taskCompleted={taskCompleted}
                        taskDeleted={taskDeleted}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
