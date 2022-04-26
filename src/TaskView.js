import { getAuth } from "firebase/auth";
import app from "./config/firebase";
import Navbar from "./components/Navbar"

let auth = getAuth(app);

export const TaskView = () => {

    return (
        <div>
            <Navbar />
            <div>Task View Here</div>
            <div>Display Name: {auth.currentUser.displayName}</div>
        </div>
    );
  
  };