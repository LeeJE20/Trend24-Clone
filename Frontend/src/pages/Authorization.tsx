import React from "react";
import styled from "styled-components";

import { SubColor1 } from "../constants/Color";

import react from "../assets/react.svg";

const Login: React.FC = () => {
  const handleLogin = () => {
    console.log("login");
  };

  return (
    <LoginPageContainer>
      <LoginContainer>
        <LoginImageWrapper>
          <CompanyLogo>
            <LogoImg src={react} alt="react" />
            Trend24
          </CompanyLogo>
          <LogoTitle>
            당신의 성장이
            <br />
            시작되는 곳
          </LogoTitle>
          <LogoSubtitle>
            관리자 페이지 관리자는
            <br />
            김지원 입니다
          </LogoSubtitle>
          <DummyImg src="Image/Dummy/DummyLogin.jpg" alt="login" />
        </LoginImageWrapper>
        <LoginFormWrapper>
          <LoginForm>
            <LoginTitle>Login</LoginTitle>
            <LoginSmall>welcome to office</LoginSmall>
            <LoginInput placeholder="Id" />
            <LoginInput placeholder="Password" />
            <LoginButton onClick={handleLogin}>Login</LoginButton>
            <LoginOptions>
              <RememberCheckBox>
                <CheckBox></CheckBox>
                remember me
              </RememberCheckBox>
              <ForgotPassword>forgot password</ForgotPassword>
            </LoginOptions>
            <Empty></Empty>
          </LoginForm>
        </LoginFormWrapper>
      </LoginContainer>
    </LoginPageContainer>
  );
};

const LoginPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${SubColor1};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 80%;
  width: 75%;
  background-color: #fd9999;
`;

const LoginImageWrapper = styled.div`
  flex: 1 0 70%;
  height: 100%;
  width: auto;
  position: relative;
  background-color: ${SubColor1};
`;

const CompanyLogo = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoTitle = styled.h1`
  position: absolute;
  top: 30%;
  left: 10%;
  font-size: 2rem;
`;

const LogoSubtitle = styled.p`
  position: absolute;
  top: 50%;
  left: 10%;
  font-size: 1rem;
`;

const DummyImg = styled.img`
  position: absolute;
  width: 30%;
  height: 80%;
  right: 0;
  bottom: 0;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

const LoginFormWrapper = styled.div`
  flex: 1 0 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
`;

const LoginForm = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

const LoginTitle = styled.h1`
  font-size: 2rem;
`;

const LoginSmall = styled.p`
  font-size: 1rem;
`;

const LoginInput = styled.input`
  width: 80%;
  height: 30px;
  border: 1px solid black;
`;

const LoginButton = styled.button`
  width: 80%;
  height: 30px;
  background-color: #000;
  color: #fff;
  border: none;
`;

const LoginOptions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const RememberCheckBox = styled.div`
  flex-direction: column;
  background-color: #000;
  color: #fff;
  border: none;
`;

const CheckBox = styled.div`
  width: 10%;
  height: 10%;
  background-color: #6c7d8f;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #252e37;
  }
`;

const ForgotPassword = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
`;

const Empty = styled.div``;

export default Login;
