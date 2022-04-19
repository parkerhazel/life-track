import React from "react";
import styled from "styled-components";
export const Login = ({}) => {
  return (
    <LoginRoot>
      <Element1>
        <Text1>Welcome to</Text1>
        <Text2>LIFETRACK</Text2>
      </Element1>
      <Text3>Stay on track by keeping track.</Text3>
      <Text4>Email</Text4>
      <WhiteRectangle placeholder={"Email"}/>
      <Text4>Password</Text4>
      <WhiteRectangle placeholder={"Password"}/>
      <FlexRow>
        <SilverRectangle />
        <Text6>Remember Me?</Text6>
        <Text7>Forgot Password?</Text7>
      </FlexRow>
      <FlexRow1>
        <AquamarineFlexRow>
          <Text8>Login</Text8>
        </AquamarineFlexRow>
        <Text9>or</Text9>
        <Element2>
          <GrannySmithAppleRectangle />
          <Text10>Sign Up</Text10>
        </Element2>
      </FlexRow1>
    </LoginRoot>
  );
};
const LoginRoot = styled.div`
  height: 734px;
  background-color: #faf2ea;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  margin: auto;
  min-width: 706px;
  padding: 145px 367px;
`;
const Element1 = styled.div`
  height: 118px;
  position: relative;
  min-width: 706px;
  margin: 0px 0px 23px 0px;
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
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0px 63px;
  margin: 0px 0px 41px 0px;
`;
const SilverRectangle = styled.div`
  width: 28px;
  height: 27px;
  background-color: #c4c4c4;
  align-self: center;
  margin: 0px 5px 0px 0px;
`;
const Text6 = styled.div`
  text-align: right;
  width: 153px;
  height: 24px;
  font-size: 20px;
  font-family: Inter;
  font-weight: 400;
  margin: 0px 128px 0px 0px;
`;
const Text7 = styled.div`
  text-align: right;
  width: 181px;
  height: 24px;
  font-size: 20px;
  font-family: Inter;
  font-weight: 400;
  color: #fb0d0d;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px 63px;
`;
const AquamarineFlexRow = styled.div`
  width: 224px;
  background-color: #a8e2de;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  padding: 7px 0px 6px 0px;
`;
const Text8 = styled.div`
  text-align: center;
  width: 171px;
  height: 50px;
  font-size: 35px;
  font-family: Inter;
  font-weight: 400;
  padding: 0px;
  border-width: 0px;
  background: none;
  display: inline-block;
  outline-width: 0px;
`;
const Text9 = styled.div`
  text-align: center;
  width: 52px;
  height: 34px;
  font-size: 25px;
  font-family: Inter;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  margin: 15px 7px 0px 0px;
`;
const Element2 = styled.div`
  align-self: stretch;
  width: 224px;
  height: 70px;
  position: relative;
  flex-grow: 1;
`;
const GrannySmithAppleRectangle = styled.div`
  width: 224px;
  height: 63px;
  background-color: #b0e2a8;
  position: absolute;
  border-radius: 25px;
`;
const Text10 = styled.div`
  text-align: center;
  width: 179px;
  height: 63px;
  font-size: 35px;
  font-family: Inter;
  font-weight: 400;
  position: absolute;
  top: 7px;
  left: 23px;
`;
const Text4 = styled.div`
  width: 171px;
  height: 50px;
  font-size: 35px;
  font-family: Inter;
  font-weight: 400;
  align-self: flex-start;
  margin: 0px 0px 0px 143px;
`;
const WhiteRectangle = styled.input`
  width: 507px;
  height: 63px;
  background-color: #ffffff;
  :: placeholder {
    color: undefined;
    font-size: 35px;
    padding-left: 20px
  }
  align-self: flex-end;
  border-radius: 25px;
  margin: 0px 63px 14px 0px;
`;
