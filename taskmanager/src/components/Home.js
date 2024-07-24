import React , {useState} from 'react'


function Home() {

    //Task State
    const [tasks,setTask]=useState([
        {
            id:1,
            title:"Default Task"
        },
    ]);

    //User input task state
    const[inputTask,setInputTast]=useState("");

    const addNewTask = (title)=>{
        if (title!==""){
            //Last ID
            const lastID = tasks[tasks.length-1].id;
            const newTask = {
                id: lastID,
                title: title
            }
            setTask([...tasks,newTask]);
            setInputTast("");
        }
    }

    return (
        <div>
            <h1 className='text-4xl font-extrabold py-5'>Task Master</h1>
            <p className='text-sm font-thin px-16'>
                Welcome to Task Master! This app helps you keep track of your tasks by marking them as completed or incomplete.
                <br/><br/>Click on a task to toggle its status.
                Add new tasks by entering a description and clicking the "Add Task" button.
                Delete tasks by clicking the "Delete" button next to a task.
            </p>

            {/* Add a section that user can add own task */}

            <section className="flex flex-col items-center justify-center m-3">

                <input type="text" 
                placeholder='Add a new task'
                className="border-2 border-purple-400 p-2 m-2 w-60 rounded-md items-center justify-center"
                value={inputTask}
                onChange={(e)=>{
                    setInputTast(e.target.value);
                }}
                />

                <button onClick={()=>addNewTask(inputTask)} className="bg-yellow-400 font-bold p-2 m-2 w-60 rounded-md">Add New Task + </button>
            </section>
        </div>

    )
}

export default Home