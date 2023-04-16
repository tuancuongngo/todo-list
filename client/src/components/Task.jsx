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
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className={"task " + (props.taskInfo.completed ? "isComplete" : "")} onClick={handleTaskClick}>
            <div className="taskName">{props.taskInfo.taskName}</div>
            <div className="deleteBtn">
                <span className="fas fa-trash-alt"></span>
            </div>
        </div>
    );
}

export default Task;
