import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainWrapper = styled.div`
  font-family: "Ubuntu", sans-serif;
  color: #403866;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 98vh;
`;
const InnerWrapper = styled.div`
  width: 390px;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const InputArea = styled.input`
  font-weight: 600;
  color: #403866;
  line-height: 1.2;
  font-size: 18px;
  display: block;
  height: 62px;
  padding: 0 20px 0 38px;
  /* border: none; */
`;
const UnderTextArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a {
    text-decoration: none;
    color: #403866;
  }
`;
const LoginBtn = styled.button`
  width: 100%;
  height: 62px;
  font-size: 16px;
  padding: 0 20px;
  font-weight: 600;
  background-color: #827ffe;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #403866;
  }
`;
// const MainWrapper = styled.div``;

const Login = () => {
  return (
    <div>
      <MainWrapper>
        <InnerWrapper>
          <Heading>LOGIN</Heading>
          <InputDiv>
            <InputArea placeholder="Password"></InputArea>
            <InputArea placeholder="Username"></InputArea>
          </InputDiv>
          <UnderTextArea>
            <div style={{ display: "flex", alignItems: "center" }}>
              <InputArea type="checkbox" />
              Remember Me
            </div>
            <Link to={"#"}>Forgot?</Link>
          </UnderTextArea>
          <LoginBtn>LOGIN</LoginBtn>
        </InnerWrapper>
      </MainWrapper>
    </div>
  );
};

export default Login;
