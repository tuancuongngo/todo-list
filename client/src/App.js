import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Task from "./components/Task";

function App() {
    const [tasks, setTasks] = useState([]);
    // const [popupToggle, setPopupToggle] = useState(false);
    // const [newTask, setNewTask] = useState("");

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

    return (
        <div className="App">
            <h1>Welcome back</h1>
            <h4>Current TODO List</h4>
            <div className="todoArea">
                {tasks.map((task) => (
                    <Task taskInfo={task} key={task._id} />
                ))}
            </div>
        </div>
    );
}

export default App;
