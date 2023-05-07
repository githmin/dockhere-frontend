import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

const ErrorArea = styled.div`
  text-align: center;
  margin-top: 1rem;
  color: red;
`;
const ResetWithToken = (props) => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [error, setError] = useState("");
  const navitage = useNavigate();
  const instance = axios.create({
    withCredentials: true,
    baseURL: props.host,
  });

  const handelSubmit = () => {
    if (password !== confPass) {
      setError("Passwords do not match");
      return;
    }
    instance
      .post(`${props.host}/api/auth/reset-password`, {
        password,
        token,
      })
      .then(() => navitage("/reset-password/success"))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <MainWrapper>
        <InnerWrapper>
          <Heading>RESET PASSWORD</Heading>
          <InputDiv>
            <InputArea
              placeholder="Password"
              onChange={(e) => {
                setError("");
                setPassword(e.target.value);
              }}
            ></InputArea>
            <InputArea
              placeholder="Re-enter Password"
              onChange={(e) => {
                setError("");
                setConfPass(e.target.value);
              }}
            ></InputArea>
          </InputDiv>
          <LoginBtn onClick={handelSubmit}>RESET</LoginBtn>
        </InnerWrapper>
        <ErrorArea>{error}</ErrorArea>
      </MainWrapper>
    </div>
  );
};

export default ResetWithToken;
