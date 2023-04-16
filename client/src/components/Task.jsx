import React from "react";
import axios from "axios";

function Task(props) {
    const handleTaskClick = () => {
        const updatedTask = { ...props.taskInfo, completed: !props.taskInfo.completed };
        axios
            .put(`http://localhost:4444/api/tasks/${props.taskInfo._id}`, updatedTask)
            .then((response) => {
                console.log(response.data);
                props.setTasks((prevTasks) =>
                    prevTasks.map((task) => (task._id === response.data._id ? response.data : task))
                );
                if (response.data.completed) {
                    props.taskCompleted(response.data.taskName);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteTask = (event) => {
        event.stopPropagation(); // STOP handleTaskClick from being run
        axios.delete(`http://localhost:4444/api/tasks/${props.taskInfo._id}`).then((response) => {
            props.setTasks((prevTasks) => prevTasks.filter((task) => task._id !== props.taskInfo._id));
            props.taskDeleted(props.taskInfo.taskName);
        });
    };

    return (
        <div className={"task " + (props.taskInfo.completed ? "isComplete" : "")} onClick={handleTaskClick}>
            <div className="taskName">{props.taskInfo.taskName}</div>
            <div className="deleteBtn" onClick={deleteTask}>
                <span className="fas fa-trash-alt"></span>
            </div>
        </div>
    );
}

export default Task;
