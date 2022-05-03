import { getAuth } from "firebase/auth";
import app from "./config/firebase";
import Navbar from "./components/Navbar"
import './TaskView.css'
import {useState} from 'react';
import {CalendarView} from './CalendarView';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

let auth = getAuth(app);
export let tasks = [];

const now = new Date();
const day = now.getDay();
const monday = now.getDate() - day + (day === 0 ? -6 : 1);
export let myEvents = [{
    start: new Date('May 1, 2022 03:24:00'),
    title: 'Go to Gym',
    color: '#fbf3ea',
    allDay: true,
    description: 'test',
    accepted: false,
    visible: true

}, {
    start: new Date('June 23, 2022'),
    title: 'John OFF (APPROVED)',
    color: '#fbf3ea',
    allDay: true,
    description: 'test',
    accepted: true,
    visible: true
}, {
    start: new Date('May 8, 2022'),
    title: 'Take out trash',
    color: '#fbf3ea',
    allDay: true,
    description: 'test',
    accepted: false,
    visible: true
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday),
    title: 'Emma OFF (PROPOSED)',
    color: '#fbf3ea',
    allDay: true,
    description: 'test',
    accepted: false,
    visible: true
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 1),
    title: 'Mark OFF (APPROVED)',
    color: '#fbf3ea',
    allDay: true,
    description: 'test',
    accepted: true,
    visible: true
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 1),
    title: 'Carol OFF (PROPOSED)',
    color: '#fbf3ea',
    allDay: true,
    description: 'test',
    accepted: false,
    visible: true
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
    title: 'Luke OFF (PROPOSED)',
    color: '#fbf3ea',
    allDay: true,
    description: 'test',
    accepted: false,
    visible: true
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
    title: 'Carol OFF (APPROVED)',
    color: '#fbf3ea',
    allDay: true,
    description: 'test',
    accepted: true,
    visible: true
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
    title: 'Kate OFF (APPROVED)',
    color: '#fbf3ea',
    allDay: true,
    description: 'test',
    accepted: true,
    visible: true
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
    title: 'Dean OFF (PROPOSED)',
    color: '#fbf3ea',
    allDay: true,
    description: 'test',
    accepted: false,
    visible: true
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
    title: 'Emma OFF (APPROVED)',
    color: '#fbf3ea',
    allDay: true,
    description: 'test',
    accepted: true,
    visible: true
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
    title: 'Jason OFF (APPROVED)',
    color: '#fbf3ea',
    allDay: true,
    description: 'test',
    accepted: true,
    visible: true
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 3),
    title: 'Jason OFF (APPROVED)',
    color: '#fbf3ea',
    allDay: true,
    description: 'test',
    accepted: true,
    visible: true
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 4),
    title: 'Ryan OFF (PROPOSED)',
    color: '#fbf3ea',
    allDay: true,
    description: 'test',
    accepted: false,
    visible: true
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 4),
    title: 'John OFF (APPROVED)',
    color: '#fbf3ea',
    allDay: true,
    description: 'test',
    accepted: true,
    visible: true
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 4),
    title: 'Dean OFF (PROPOSED)',
    color: '#fbf3ea',
    allDay: true,
    description: 'test',
    accepted: false,
    visible: true
}];

export const TaskView = () => {
    const [state, setState] = useState({view: 'listView', tasks: [], description: '', name: '', recurring: null})
    const [startDate, setStartDate] = useState(new Date());

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
                recurring: prevState.recurring,
            };
        });
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
    }

    const createTask = () => {
        // let currTasks = state.tasks;
        // currTasks.push({
        //     title: state.name,
        //     description: state.description,
        //     start: startDate,
        //     color: '#fbf3ea',
        //     allDay: true,
        //     accepted: true,
        //     visible: true
        // });

        myEvents.push({
            title: state.name,
            description: state.description,
            start: startDate,
            color: '#fbf3ea',
            allDay: true,
            accepted: true,
            visible: true
        });
        setState(() => {
            return {
                view: 'listView',
                tasks: [],
                description: '',
                name: '',
                recurring: null,
                date: null
            }
        });

        setStartDate(() => new Date());
    }

    const cancelTask = () => {
        setState((prevState) => {
            return {
                view: 'listView',
                tasks: prevState.tasks,
                description: '',
                name: '',
                recurring: null
            };
        });

        setStartDate(() => new Date());
    }

    const deleteTask = (event) => {
        event.preventDefault();
        console.log(event.target);
        console.log(event.target.parentElement.parentElement.id);
        let id = event.target.parentElement.parentElement.id;
        let idx = parseInt(id.split('-')[1]);
        console.log(idx);
        myEvents[idx].visible = false;
        console.log(myEvents);
    }

    const completeTask = (event) => {
        event.preventDefault();
        let id = event.target.parentElement.parentElement.id;
        let idx = parseInt(id.split('-')[1]);
        if (event.target.innerHTML === 'Complete') {
            event.target.innerHTML = 'Undo Completion';
            myEvents[idx].color = '#00ca10';
            event.target.parentElement.parentElement.style.backgroundColor = '#00ca10';
        } else {
            event.target.innerHTML = 'Complete'
            myEvents[idx].color = '#fbf3ea'
            event.target.parentElement.parentElement.style.backgroundColor = '#fbf3ea';
        }
    }

    const filterTasks = () => {
        let filteredTasks = [];
        for (let task in myEvents) {
            console.log(task);
            if (task.visible) {
                filteredTasks.push(task);
            }
        }
        return filteredTasks;
    };

    const updateToCalendarView = () => {
        setState((prevState) => {
            return {
                view: 'calendarView',
                tasks: prevState.tasks,
                description: prevState.description,
                name: prevState.name,
                recurring: prevState.recurring
                
            }
        });
    }

    const updateToListView = () => {
        setState((prevState) => {
            return {
                view: 'listView',
                tasks: prevState.tasks,
                description: prevState.description,
                name: prevState.name,
                recurring: prevState.recurring
                
            }
        });
    }

    if (state.view === 'listView') {
        if (myEvents.length > 0) {
            return (
                <div className='taskViewDiv'>
                    <Navbar />
                    <div className='btnDiv'>
                        <button onClick={updateToListView} className='viewBtn'>List</button>
                        <div className='space'>
                        </div>
                        <button onClick={updateToCalendarView} className='viewBtn'>Calendar</button>
                    </div>
                    <div className='titleDiv'>
                        <h1 className='title'>Current Tasks</h1>
                    </div>
                    <div id='taskContainer'>
                        {myEvents.map((task, index) => {
                            if (task.visible) {
                                let color = task.color === '#00ca10' ? task.color : '#fbf3ea';
                                let dateArr = task.start.toString().split(' ');
                                let dateStr = dateArr.slice(0, 4).join(' ');
                                return (
                                    <div className='taskItem' id={`taskItem-${index}`} style={{backgroundColor:color}}>
                                        <div className='taskInfo'>
                                            <h3>{task.title}</h3>
                                            <p>{task.description}</p>
                                            <p className='date'>{dateStr}</p>
                                        </div>
                                        <div className='taskItemButtons'>
                                            <button className='taskItemEdit'>Edit</button>
                                            <button className='taskItemDelete' onClick={deleteTask}>Delete</button>
                                            <button className='taskItemComplete' onClick={completeTask}>{color === '#00ca10' ? 'Undo Completion' : 'Complete'}</button>
                                        </div>
                                    </div>
                                )
                            }
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
                        <div className='btnDiv'>
                            <button onClick={updateToListView} className='viewBtn'>List</button>
                            <div className='space'>
                            </div>
                            <button onClick={updateToCalendarView} className='viewBtn'>Calendar</button>
                        </div>
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
        // return (
        //     <div className='createTaskDiv'>
        //         <h1 className='createTaskTitle'>Create Task</h1>
        //         <form>
        //             <label className='label' htmlFor='name'>Name</label>
        //             <input className='nameBox' type='text' id='name' onChange={handleNameInputChange} />
        //             <br />
        //             <label className='label' htmlFor='description' >Description</label>
        //             <input className='descBox' type='text' id='description' onChange={handleDescriptionInputChange}/>
        //             <br/>
        //             <div className='actionBtns'>
        //                 <button onClick={createTask} className='viewBtn'>Submit</button>
        //                 <div className='space'>
        //                 </div>
        //                 <button className='cancelBtn'>Cancel</button>
        //             </div>
        //         </form>
        //     </div>
        // )

        // return (
        //     <div className="createBox">
        //         <div>
            
        //             <h4 className="createTaskTitle">Create Task</h4>
        //             <form className="nameinput">
        //                 <div className="namelabel">
        //                     <label className="formLabel" htmlFor="name">Name:        </label>
        //                     <input type="text" id="name" onChange={handleNameInputChange} ></input>
        //                 </div>
                    
        //                 <div className="descriptionlabel">
        //                     <label className="formLabel" htmlFor="description">Description:  </label>
        //                     <input type="text" id="description" onChange={handleDescriptionInputChange}></input>
        //                 </div>
        //                 <div>
        //                     <label htmlFor="date">Date:                     </label>
        //                     <input type="text" id="date"></input>
        //                     {/* <DatePicker id='date' selected={startDate} onChange={(date:Date) => setStartDate(date)} /> */}
        //                 </div>
                        <div className='actionBtns'>
                            <button onClick={createTask} className='viewBtn'>Submit</button>
                            <div className='space'>
                            </div>
                            <button className='cancelBtn' onClick={cancelTask}>Cancel</button>
                        </div>
        //             </form>
        //         </div>
        //     </div>

        // )
        return (
        <div className="createBox">
            <div>
            
                <h4 className="createTaskTitle">Create Task</h4>
                <form className="nameinput">
                    <div className="namelabel">
                        <label className="formLabel" for="name">Name:   </label>
                        <input type="text" id="name" onChange={handleNameInputChange} ></input>
                    </div>
                
                    <div className="descriptionlabel">
                        <label className="formLabel" for="desc">Description:  </label>
                        <input type="text" id="desc" onChange={handleDescriptionInputChange}></input>
                    </div>
                    <div>
                        <p>Date:</p>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className='actionBtns'>
                            <button onClick={createTask} className='viewBtn'>Submit</button>
                            <div className='space'>
                            </div>
                            <button className='cancelBtn' onClick={cancelTask}>Cancel</button>
                    </div>
                </form>
                
                {/* <fieldset className="recurringfield">
                    <legend>Recurring Task:</legend>
                    <div id="yesCheck">
                        <input type="checkbox" id="yesbox" name="yesbox"></input>
                        <label for="yesbox">Yes</label>
                    </div>
                    <div id="noCheck">
                        <input type="checkbox" id="nobox" name="nobox"></input>
                        <label for="nobox">No</label>
                    </div>
                </fieldset> */}
                <div>
                    
                </div>
            </div>
        </div>
        )

    } else if (state.view === 'calendarView') {
        return (
        <div>
            <Navbar />
            <div className='btnDiv'>
                <button onClick={updateToListView} className='viewBtn'>List</button>
                <div className='space'>
                </div>
                <button onClick={updateToCalendarView} className='viewBtn'>Calendar</button>
            </div>
            <CalendarView />
        </div>
        );
    }
  }