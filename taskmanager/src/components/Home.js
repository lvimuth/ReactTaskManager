import React, { useState } from 'react'
import { FiTrash2, FiCheckCircle } from "react-icons/fi";


function Home() {

    //Task State
    const [tasks, setTask] = useState([
        {
            id: 1,
            title: "Default Task"
        },
    ]);

    //User input task state
    const [inputTask, setInputTast] = useState("");

    const addNewTask = (title) => {
        if (title !== "") {
            //Last ID
            const lastID = tasks[tasks.length - 1].id;
            const newTask = {
                id: lastID,
                title: title
            }
            setTask([...tasks, newTask]);
            setInputTast("");
        }
    }

    const removeTask=(id)=>{
        setTask((prevTask)=>{
            prevTask.filter(task => task.id !== id);
        });
    }

    return (
        <div>
            <h1 className='text-4xl font-extrabold py-5'>Task Master</h1>
            <p className='text-sm font-thin px-16'>
                Welcome to Task Master! This app helps you keep track of your tasks by marking them as completed or incomplete.
                <br /><br />Click on a task to toggle its status.
                Add new tasks by entering a description and clicking the "Add Task" button.
                Delete tasks by clicking the "Delete" button next to a task.
            </p>

            {/* Add a section that user can add own task */}

            <section className="flex flex-col items-center justify-center m-3">

                <input type="text"
                    placeholder='Add a new task'
                    className="border-2 border-purple-400 p-2 m-2 w-60 rounded-md items-center justify-center"
                    value={inputTask}
                    onChange={(e) => {
                        setInputTast(e.target.value);
                    }}
                />

                <button onClick={() => addNewTask(inputTask)} className="bg-yellow-400 font-bold p-2 m-2 w-60 rounded-md">Add New Task + </button>
            </section>

            {/* List all tasks */}
            <section className='p-5 border-t-4 m-5'>
                {
                    tasks.map((task) => {
                        return (
                            <div key={task.id}
                            className='flex flex-row items-center justify-center gap-4'
                            >
                                <p className='bg-purple-400 p-2 m-2 rounded-md'>{task.title}</p>
                                <div onClick={()=>removeTask(task.id)} className='p-3 bg-red-500 rounded-md cursor-pointer text-white'>
                                    <FiTrash2 />
                                </div>
                                <div className='p-3 bg-green-500 rounded-md cursor-pointer text-white'>
                                    <FiCheckCircle />
                                </div>
                            </div>
                        );
                    })
                }
            </section>
        </div>

    )
}

export default Home