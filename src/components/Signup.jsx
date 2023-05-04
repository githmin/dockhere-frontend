import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  text-align: center;
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

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navitage = useNavigate();

  const instance = axios.create({
    withCredentials: true,
    baseURL: props.host,
  });
  const handelSignup = () => {
    instance
      .post("/api/auth/register", {
        username,
        password,
      })
      .then((res) => {
        navitage("/login");
      });
  };
  return (
    <div>
      <MainWrapper>
        <InnerWrapper>
          <Heading>SIGN UP 🚀</Heading>
          <InputDiv>
            <InputArea
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            ></InputArea>
            <InputArea
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></InputArea>
            <UnderTextArea>
              By joining, you agree to our Terms of Service and Privacy Policy
            </UnderTextArea>
            <LoginBtn onClick={handelSignup}>SIGN UP</LoginBtn>
            <UnderTextArea>
              Made with 🖤 By
              <Link to={"https://github.com/githmin"}>
                {" "}
                Githmin Jayawardhana
              </Link>
            </UnderTextArea>
          </InputDiv>
        </InnerWrapper>
      </MainWrapper>
    </div>
  );
};

export default Signup;
