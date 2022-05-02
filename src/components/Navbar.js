import styled from "styled-components";
import React, {useState} from "react";
import { auth } from "../App";
import { myEvents } from "../TaskView";
import './Navbar.css';

export function getCurrentDate(separator=''){

    var weekday=new Array(7);
    weekday[0]="Sun";
    weekday[1]="Mon";
    weekday[2]="Tue";
    weekday[3]="Wed";
    weekday[4]="Thurs";
    weekday[5]="Fri";
    weekday[6]="Sat";

    var monthStr = new Array(12);
    monthStr[0]="Jan";
    monthStr[1]="Feb";
    monthStr[2]="Mar";
    monthStr[3]="Apr";
    monthStr[4]="May";
    monthStr[5]="Jun";
    monthStr[6]="Jul";
    monthStr[7]="Aug";
    monthStr[8]="Sep";
    monthStr[9]="Oct";
    monthStr[10]="Nov";
    monthStr[11]="Dec";

    let newDate = new Date()
    let day = weekday[newDate.getDay()];
    let date = newDate.getDate();
    let month = monthStr[newDate.getMonth()];
    
    return `${day} ${month} ${date}`
    // return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
}

const Navbar = () => {

    let currentUser = auth.currentUser

    let outerStyle = {
        backgroundColor: "#B7B7A4",
        display: "flex",
        flexDirection: "row",
        height: "70px",
    }
    let dateStyle = {
        fontSize: "30px",
        display: "flex",
        alignItems: "center",
        width: "12%",
        margin: "0 auto"
    }

    let buttonStyle = {
        width: "150px",
        // backgroundColor: "#a8e2de",
        // backgroundColor: "#D0DBE1",
        border: "none",
        cursor: "pointer",
        background: "none",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "25px",
        padding: "7px 0px 6px 0px",
        alignSelf: "center",
        textAlign: "center",
        fontSize: "25px",
        fontFamily: "Inter",
        fontWeight: "400",
        marginRight: "20px"
    }

    let profileStyle = {
        position: "fixed",
        zIndex: "100",
        margin: "25px 25px 25px 25px",
        width: "96%",
        height: "82%",
        backgroundColor: "#B7B7A4",
        border: "2px",
        borderStyle: "solid",
        borderRadius: "25px",
        backdropFilter: "blur(2px)"
    }

    let closeButtonStyle = {
        right: "20px",
        position: "fixed",
        fontSize: "x-large",
        backgroundColor: "#F2FDFF"
    }

    let trackedTasksStyle = {
        overflow: 'auto',
        backgroundColor: "#F2FDFF",
        width: "98%",
        height: "52%",
        borderRadius: "25px"
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

    let [showProfile, setShowProfile] = useState(false);

    function showProfileHandler() {
        setShowProfile(true);
    }
    function hideProfileHandler() {
        setShowProfile(false)
    }

    let tasks = (<div style={{paddingLeft: "20px", paddingTop:"15px"}}>{myEvents.map((task, index) => {
        if (task.visible) {
            let color = task.color === '#00ca10' ? task.color : '#fbf3ea';
            return (
                <div className='profileTaskItem' id={`taskItem-${index}`} style={{backgroundColor:color}}>
                    <div className='taskInfo'>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                    </div>
                    <div className='taskItemButtons'>
                        <button className='taskItemEdit'>Edit</button>
                        <button className='taskItemDelete' onClick={deleteTask}>Delete</button>
                        <button className='taskItemComplete' onClick={completeTask}>{color === '#00ca10' ? 'Undo Completion' : 'Complete'}</button>
                    </div>
                </div>
            )
        }
    })}</div>)

    if (showProfile) {
        if (myEvents.length > 0) {
            return (
                <div>
                    <div style={outerStyle}>
                        <Text2>LIFETRACK</Text2>
                        <div style={dateStyle}>{getCurrentDate()}</div>
                        <button style={buttonStyle} onClick={hideProfileHandler}>Profile</button>
                    </div>
                    <div className="card" style={profileStyle}>
                        <div className="container" style={{height: "98%"}}>
                            <button style={closeButtonStyle} onClick={hideProfileHandler}>X</button>
                            <h1 style={{marginLeft:"48.5%", fontSize: "x-large"}}><b>Profile</b></h1>
                            <div style={{marginLeft: "25px", height: "90%"}}>
                                <h2>Name</h2>
                                <input placeholder={currentUser.displayName}/>
                                <h2>Email</h2>
                                <input placeholder={currentUser.email}/>
                                <h2>Tracked Tasks</h2>
                                <div style={trackedTasksStyle}>{tasks}</div>
                            </div>
                        </div>
                    </div>
                </div>

            )
        } else {
            return (
                <div>
                    <div style={outerStyle}>
                        <Text2>LIFETRACK</Text2>
                        <div style={dateStyle}>{getCurrentDate()}</div>
                        <button style={buttonStyle} onClick={hideProfileHandler}>Profile</button>
                    </div>
                    <div className="card" style={profileStyle}>
                        <div className="container" style={{height: "98%"}}>
                            <button style={closeButtonStyle} onClick={hideProfileHandler}>X</button>
                            <h1 style={{marginLeft:"48.5%", fontSize: "x-large"}}><b>Profile</b></h1>
                            <div style={{marginLeft: "25px", height: "90%"}}>
                                <h2>Name</h2>
                                <input placeholder={currentUser.displayName}/>
                                <h2>Email</h2>
                                <input placeholder={currentUser.email}/>
                                <h2>Tracked Tasks</h2>
                                <div style={trackedTasksStyle}>{tasks}</div>
                            </div>
                        </div>
                    </div>
                </div>

            )
        }
    } else {
        return (
            <div style={outerStyle}>
                <Text2>LIFETRACK</Text2>
                <div style={dateStyle}>{getCurrentDate()}</div>
                <button style={buttonStyle} onClick={showProfileHandler}>Profile</button>
            </div>
        )
    }
}

export default Navbar

const Text2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 35px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #135bc6;
    top: 36px;
    margin-left: 20px;
`;