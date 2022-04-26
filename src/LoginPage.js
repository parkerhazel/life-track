import styled from "styled-components";
import app from "./config/firebase";
import { getAuth } from "firebase/auth";
import App from "./App";

const auth = getAuth(app)
console.log(auth)

export const Login = () => {

  function changeCurrentPage() {
    App.setCurrentPage("Task View")
  }

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

};
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
  padding-left: 70px;
`;
const Text1 = styled.div`
  text-align: center;
  width: 420px;
  height: 55px;
  font-size: 30px;
  font-family: Inter;
  font-weight: 400;
  position: absolute;
  left: 143px;
`;
const Text2 = styled.div`
  text-align: center;
  width: 706px;
  font-size: 70px;
  font-family: Roboto;
  font-weight: 600;
  color: #135bc6;
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
  background-color: #a8e2de;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  padding: 7px 0px 6px 0px;
  align-self: center;
  text-align: center;
  font-size: 35px;
  font-family: Inter;
  font-weight: 400;
`;
