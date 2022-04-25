import {Login} from "./Login";


//////////////// FIREBASE ////////////////////////////////////////////////
// Import the functions you need from the SDKs you need                 //
import { initializeApp } from "firebase/app";                           //
import { getAnalytics } from "firebase/analytics";                      //
// TODO: Add SDKs for Firebase products that you want to use            //
// https://firebase.google.com/docs/web/setup#available-libraries       // 
                                                                        //
// Your web app's Firebase configuration                                //
// For Firebase JS SDK v7.20.0 and later, measurementId is optional     //
const firebaseConfig = {                                                //
  apiKey: "AIzaSyDiDTIUuJwFEddYmV4NSJUSkKbt4YojIpU",                    //
  authDomain: "lifetrack-2fce5.firebaseapp.com",                        //
  projectId: "lifetrack-2fce5",                                         //
  storageBucket: "lifetrack-2fce5.appspot.com",                         //
  messagingSenderId: "1040497376961",                                   //
  appId: "1:1040497376961:web:500742fcf24e8c610d1e40",                  //
  measurementId: "G-1K0JLFJKDM"                                         //
};                                                                      //
                                                                        //
// Initialize Firebase                                                  //
const app = initializeApp(firebaseConfig);                              //
const analytics = getAnalytics(app);                                    //
//////////////////////////////////////////////////////////////////////////


export default function App() {
    return <Login />;
}