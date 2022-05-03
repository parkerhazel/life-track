// import {Login} from "./LoginPage";
import app from "./config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { TaskView } from "./TaskView";
import React, {useState} from "react";
import styled from "styled-components";
import { CalendarView } from './CalendarView';
import tasks from './TaskView';
import { myEvents } from "./TaskView";

console.log(myEvents);

export const auth = getAuth(app);

var email = "testuser@test.com"
var password = "password123"

signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    // Signed in 
    // setUser(() => {return userCredential.user});
    console.log(auth.currentUser)
    // ...
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
});


export default function App() {

    let [currentPage, setCurrentPage] = useState("Login")

    // document.getElementById("listViewButton").addEventListener("click", switchToListView);
    // document.getElementById("calendarViewButton").addEventListener("click", switchToCalendarView);

    function changeCurrentPage() {
        setCurrentPage("taskView");
    }

    function switchToListView() {
        setCurrentPage('taskView');
    }

    function switchToCalendarView() {
        setCurrentPage('calendarView');
    }

    if (currentPage==="Login") {
        return (
        <LoginRoot>
            <Welcome>
                <Text1>Welcome to</Text1>
                <Text2>LIFETRACK</Text2>
            </Welcome>
            <Text3>Stay on track by keeping track.</Text3>
            <Button onClick={changeCurrentPage}>Start!</Button>
        </LoginRoot>
        );
    }
    else if (currentPage === 'taskView') {
        return <TaskView />;
    }

}
const LoginRoot = styled.div`
  background-color: #FBF3EA;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  margin: auto;
  min-width: 706px;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 367px;
  padding-right: 367px;
`;
const Welcome = styled.div`
  height: 118px;
  position: relative;
  min-width: 706px;
  margin: 200px 0px 23px 0px;
`;
const Text1 = styled.div`
  text-align: center;
  width: 420px;
  height: 55px;
  font-size: 30px;
  font-family:'Poppins', sans-serif;
  font-weight: 400;
  position: absolute;
  left: 143px;
`;
const Text2 = styled.div`
  text-align: center;
  width: 706px;
  font-size: 70px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #582F0E;
  position: absolute;
  top: 36px;
`;
const Text3 = styled.div`
  text-align: center;
  width: 491px;
  height: 56px;
  font-size: 25px;
  font-family: Inter;
  font-weight: 400;
  align-self: center;
  margin: 0px 0px 24px 0px;
`;

const Button = styled.button`
  width: 224px;
  background-color: #B7B7A4;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  padding: 7px 0px 6px 0px;
  align-self: center;
  text-align: center;
  font-size: 35px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
`
