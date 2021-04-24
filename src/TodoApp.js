import React, { useState } from 'react';
import './App.css';


function TodoApp() {

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    const handdleChange = (e) => {
        setTask(e.target.value);
    };

    const AddTask = () => {
        if (task !== "") {
            const taskDetails = {
                id: Math.floor(Math.random() * 1000),
                value: task,
                isCompleted: false
            }

            setTaskList([...taskList, taskDetails]);

        }
    };
    console.log("taskList", taskList);

    const deleteTask = (e, id) => {
        e.preventDefault();
        setTaskList(taskList.filter((t) => t.id != id));
    };

    const taskCompleted = (e, id) => {
        e.preventDefault();
        //find index
        const element = taskList.findIndex(elem => elem.id == id);

        //copy tasklist
        const newTaskList = [...taskList];

        //edit
        newTaskList[element] = {
            ...newTaskList[element],
            isCompleted: true
        };

        //set
        setTaskList(newTaskList);
    }



    return (
        <div>
            <input
                type="text"
                name="text"
                id="text"
                placeholder="Add todo list ..."
                onChange={(e) => handdleChange(e)}></input>
            <input
                type="submit"
                value="OK"
                className="btn"
                onClick={AddTask}
            >
            </input>

            <br />

            {taskList !== [] ?
                <ul>
                    {taskList.map(t =>
                        <span className={t.isCompleted ? "taskIsCompleted" : "crossTask"}>
                            {t.value} <t /><t /><t /><t />
                            <button onClick={(e) => deleteTask(e, t.id)}>Delete</button>
                            <button onClick={(e) => taskCompleted(e, t.id)}>Completed</button>
                            <br />
                        </span>

                    )}
                </ul>

                : null}
            <br />
        </div>
    );
}

export default TodoApp;