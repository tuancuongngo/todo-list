import React from "react";

function Task(props) {
    return (
        <div className="task">
            <div className="taskName">{props.taskInfo.taskName}</div>
            <div className="deleteBtn">
                <span className="fas fa-trash-alt"></span>
            </div>
        </div>
    );
}

export default Task;
