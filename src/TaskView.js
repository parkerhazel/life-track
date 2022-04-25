import { getAuth } from "firebase/auth";
import app from "./config/firebase";

let auth = getAuth(app);

export const TaskView = () => {

    return (
        <div>
            <div>Task View Here</div>
            <div>Display Name: {auth.currentUser.displayName}</div>
        </div>
    );
  
  };