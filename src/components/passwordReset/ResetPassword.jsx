import axios from "axios";
import React, { useEffect, useState } from "react";
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
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a {
    text-decoration: none;
    color: #403866;
  }
`;
const LoginBtn = styled.button`
  margin-top: 1rem;
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

const NavUnderSignIn = styled(Link)`
  text-align: center;
  text-decoration: none;
  margin-top: 1rem;
  color: #403866;
`;
const ResetPassword = (props) => {
  const [email, setEmail] = useState("");
  const navitage = useNavigate();
  const instance = axios.create({
    withCredentials: true,
    baseURL: props.host,
  });

  const handelReset = () => {
    instance
      .post("/api/auth/forgot-password", {
        email,
      })
      .then(() => navitage("/forgot-password/requested"))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <MainWrapper>
        <InnerWrapper>
          <Heading>RESET PASSWORD</Heading>
          <InputDiv>
            <InputArea
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></InputArea>
          </InputDiv>
          <LoginBtn onClick={handelReset}>RESET</LoginBtn>
        </InnerWrapper>
        <NavUnderSignIn to={"/signup"}>Not Registered Yet?</NavUnderSignIn>
      </MainWrapper>
    </div>
  );
};

export default ResetPassword;
