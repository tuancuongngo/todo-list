import "./App.css";

function App() {
    return (
        <div className="App">
            <h1>Welcome back</h1>
            <h4>Current TODO List</h4>
            <div className="todoArea">
                <div className="task">
                    {/* <div className="checkbox"></div> */}
                    <div className="taskName">Finish MERN by end of today</div>
                    <div className="deleteBtn">
                        <span class="fas fa-trash-alt"></span>
                    </div>
                </div>
                <div className="task isComplete">
                    {/* <div className="checkbox"></div> */}
                    <div className="taskName">Yes</div>
                    <div className="deleteBtn">
                        <span class="fas fa-trash-alt"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
