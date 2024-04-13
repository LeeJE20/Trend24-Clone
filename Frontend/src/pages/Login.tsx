import { useState } from "react";
import styled from "styled-components";

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <LoginContainer>
      {isChecked ? (
        <Checkbox onClick={handleCheckbox}>Sign Up</Checkbox>
      ) : (
        <Checkbox onClick={handleCheckbox}>Sign In</Checkbox>
      )}
      {isChecked ? (
        <SigninContainer>
          <Title>Login</Title>
          <Form>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required />
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" name="password" required />
            <Button type="submit">Sign In</Button>
          </Form>
        </SigninContainer>
      ) : (
        <SignupContainer>
          <Title>Sign Up</Title>
          <Form>
            <Label htmlFor="newEmail">Email</Label>
            <Input type="email" id="newEmail" name="newEmail" required />
            <Label htmlFor="newPassword">Password</Label>
            <Input
              type="password"
              id="newPassword"
              name="newPassword"
              required
            />
            <Button type="submit">Sign Up</Button>
          </Form>
        </SignupContainer>
      )}
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Checkbox = styled.button`
  width: 100px;
  height: 40px;
  background-color: #6c7d8f;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #252e37;
  }
`;

const SigninContainer = styled.div`
  background-color: #fff;
  padding: 32px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
`;

const SignupContainer = styled.div`
  background-color: #fff;
  padding: 32px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
`;

const Title = styled.h1`
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 8px;
  color: #333;
`;

const Input = styled.input`
  width: 250px;
  height: 40px;
  margin-bottom: 16px;
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  background-color: #6c7d8f;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #252e37;
  }
`;

export default Login;
