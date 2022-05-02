import { getAuth } from "firebase/auth";
import app from "./config/firebase";
import Navbar from "./components/Navbar"
import './TaskView.css'
import {useState} from 'react';
import {CalendarView} from './CalendarView'

let auth = getAuth(app);
export let tasks = [];

const now = new Date();
const day = now.getDay();
const monday = now.getDate() - day + (day === 0 ? -6 : 1);
export let myEvents = [{
    start: new Date('May 1, 2022 03:24:00'),
    title: 'Go to Gym',
    color: '#e7b300',
    allDay: true,
    description: 'test',
    accepted: false

}, {
    start: new Date('June 23, 2022'),
    title: 'John OFF (APPROVED)',
    color: '#00ca10',
    allDay: true,
    description: 'test',
    accepted: true
}, {
    start: new Date('May 8, 2022'),
    title: 'Take out trash',
    color: '#e7b300',
    allDay: true,
    description: 'test',
    accepted: false
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday),
    title: 'Emma OFF (PROPOSED)',
    color: '#e7b300',
    allDay: true,
    description: 'test',
    accepted: false
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 1),
    title: 'Mark OFF (APPROVED)',
    color: '#00ca10',
    allDay: true,
    description: 'test',
    accepted: true
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 1),
    title: 'Carol OFF (PROPOSED)',
    color: '#e7b300',
    allDay: true,
    description: 'test',
    accepted: false
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
    title: 'Luke OFF (PROPOSED)',
    color: '#e7b300',
    allDay: true,
    description: 'test',
    accepted: false
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
    title: 'Carol OFF (APPROVED)',
    color: '#00ca10',
    allDay: true,
    description: 'test',
    accepted: true
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
    title: 'Kate OFF (APPROVED)',
    color: '#00ca10',
    allDay: true,
    description: 'test',
    accepted: true
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
    title: 'Dean OFF (PROPOSED)',
    color: '#e7b300',
    allDay: true,
    description: 'test',
    accepted: false
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
    title: 'Emma OFF (APPROVED)',
    color: '#00ca10',
    allDay: true,
    description: 'test',
    accepted: true
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
    title: 'Jason OFF (APPROVED)',
    color: '#00ca10',
    allDay: true,
    description: 'test',
    accepted: true
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 3),
    title: 'Jason OFF (APPROVED)',
    color: '#00ca10',
    allDay: true,
    description: 'test',
    accepted: true
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 4),
    title: 'Ryan OFF (PROPOSED)',
    color: '#e7b300',
    allDay: true,
    description: 'test',
    accepted: false
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 4),
    title: 'John OFF (APPROVED)',
    color: '#00ca10',
    allDay: true,
    description: 'test',
    accepted: true
}, {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 4),
    title: 'Dean OFF (PROPOSED)',
    color: '#e7b300',
    allDay: true,
    description: 'test',
    accepted: false
}];

export let myView = 'listView';
export function setMyView(val) {
    myView = val;
}

// export const CalendarView = () => {
//     const view = React.useMemo(() => {
//         return {
//             calendar: {
//                 type: 'month'
//             }
//         };
//     }, []);
    
//     const orderMyEvents = React.useCallback((event) => {
//         return event.accepted ? 1 : -1;
//     }, []);

//     return (
//         <Eventcalendar
//             theme="ios" 
//             themeVariant="light"
//             clickToCreate={false}
//             dragToCreate={false}
//             dragToMove={false}
//             dragToResize={false}
//             view={view}
//             data={myEvents}
//             eventOrder={orderMyEvents}
//        />
//     ); 
// }

export const TaskView = () => {
    const [state, setState] = useState({view: 'calendarView', tasks: [], description: '', name: '', recurring: null})

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
            title: state.name,
            description: state.description,
            start: new Date(),
            color: '#00ca10',
            allDay: true,
            accepted: true
        });

        myEvents.push({
            title: state.name,
            description: state.description,
            start: new Date(),
            color: '#00ca10',
            allDay: true,
            accepted: true
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
        console.log(state);
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
        console.log(state);
    }

    if (state.view === 'listView') {
        if (myEvents.length > 0) {
            return (
                <div className='taskViewDiv'>
                    <Navbar />
                    <button onClick={updateToListView}>List</button>
                    <button onClick={updateToCalendarView}>Calendar</button>
                    <div className='titleDiv'>
                        <h1 className='title'>Current Tasks</h1>
                    </div>
                    <div id='taskContainer'>
                        {myEvents.map(task => {
                            console.log(myEvents);
                            return (
                                    <div className='taskItem'>
                                        <h3>{task.title}</h3>
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
                        <button onClick={updateToListView}>List</button>
                        <button onClick={updateToCalendarView}>Calendar</button>
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
    } else if (state.view === 'calendarView') {
        return (
        <div>
            <Navbar />
            <button onClick={updateToListView}>List</button>
            <button onClick={updateToCalendarView}>Calendar</button>
            <CalendarView />
        </div>
        );
    }
  
  }

export const TaskItem = () => {

}