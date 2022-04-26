import { getAuth } from "firebase/auth";
import app from "./config/firebase";
import Navbar from "./components/Navbar"
import './TaskView.css'
import {useState} from 'react';

let auth = getAuth(app);

export const TaskView = () => {
    const [state, setState] = useState({view: 'listView', tasks: [], description: '', name: '', recurring: null})

    const handleCreateTask = (event) => {
        event.preventDefault();
        let currTasks = state.tasks;
        setState(() => {
            return {view: 'createTaskView', tasks: currTasks, description: '', name: '', recurring: null}
        });
    }

    const handleNameInputChange = ({target}) => {
        setState((prevState) => {
            return {
                view: prevState.view, 
                tasks: prevState.tasks, 
                description: prevState.description, 
                name: target.value,
                recurring: prevState.recurring
            };
        });
        console.log(state);
    }

    const handleDescriptionInputChange = ({target}) => {
        setState((prevState) => {
            return {
                view: prevState.view,
                tasks: prevState.tasks,
                description: target.value,
                name: prevState.name,
                recurring: prevState.recurring
                
            }
        });
        console.log(state);
    }

    const createTask = () => {
        let currTasks = state.tasks;
        currTasks.push({
            name: state.name,
            description: state.description
        });
        setState(() => {
            return {
                view: 'listView',
                tasks: currTasks,
                description: '',
                name: '',
                recurring: null
                
            }
        });
    }

    if (state.view === 'listView') {
        if (state.tasks.length > 0) {
            return (
                <div className='taskViewDiv'>
                    <Navbar />
                    <div className='titleDiv'>
                        <h1 className='title'>Current Tasks</h1>
                    </div>
                    <div id='taskContainer'>
                        {state.tasks.map(task => {
                            return (
                                    <div className='taskItem'>
                                        <h3>{task.name}</h3>
                                        <p>{task.description}</p>             
                                    </div>
                            )
                        })}
                    </div>
                    <div>
                        <button onClick={handleCreateTask} className='newTaskButton'>+ Task</button>
                    </div>
                </div>
        );
        }
        else {
                return (
                    <div className='taskViewDiv'>
                        <Navbar />
                        <div className='titleDiv'>
                            <h1 className='title'>Current Tasks</h1>
                        </div>
                        <div>
                            <button onClick={handleCreateTask} className='newTaskButton'>+ Task</button>
                        </div>
                    </div>
            );
        }
    // The Create Task View Still Needs To Be Fixed, This Was For Testing Creating Tasks
    } else if (state.view === 'createTaskView') {
        return (
            <div className='createTaskDiv'>
                <h1 className='createTaskTitle'>Create Task</h1>
                <form>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' onChange={handleNameInputChange} />
                    <br />
                    <label htmlFor='description'>Description</label>
                    <input type='text' id='description' onChange={handleDescriptionInputChange}/>
                    <br/>
                    {/* <div id='recurringDiv'>
                        <p>Recurring?</p>
                        <label htmlFor='recurringY'>Y</label>
                        <input type='checkbox' id='recurringY' />
                        <label htmlFor='recurringN'>N</label>
                        <input type='checkbox' id='recurringN' />
                    </div> */}
                    <button onClick={createTask}>Submit</button>
                    <button>Cancel</button>
                </form>
            </div>
        )
    }
  
  };

export const TaskItem = () => {

}