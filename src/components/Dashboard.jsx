import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a {
    text-decoration: none;
    color: black;
  }
`;

const MainHeading = styled.h1`
  font-family: "Ubuntu", sans-serif;
`;

const Header = styled.div`
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-evenly;
  background-color: white;
  border-radius: 4px;
  border: 1px solid grey;
`;

const HeaderSections = styled.div`
  padding: 1rem;
`;

const Control = styled.div`
  /* border: 1px solid black; */
  margin-top: 1rem;
  padding: 1rem;
  gap: 1rem;
  display: flex;
  justify-content: flex-start;
  background-color: white;
  border-radius: 4px;
  border: 1px solid grey;
`;

const ControllButtons = styled.button`
  background-color: #1652f0;
  border: 1px solid #1652f0;
  border-radius: 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-size: 14px;
  padding: 12px 30px;
  position: relative;
  text-align: center;

  &:hover {
    background-color: #0a46e4;
    border-color: #0a46e4;
  }
`;
const Dashboard = () => {
  return (
    <div>
      <Container>
        <MainHeader>
          <MainHeading>Dashboard</MainHeading>
          <Link to={"#"}>LOG OUT</Link>
        </MainHeader>
        <Header>
          <HeaderSections>
            <p>Operating System</p>
            <p>Ubuntu 22.04</p>
          </HeaderSections>
          <HeaderSections>
            <p>Host</p>
            <p>host.helpinghands.tk</p>
          </HeaderSections>
          <HeaderSections>
            <p>Port</p>
            <p>5000</p>
          </HeaderSections>
          <HeaderSections>
            <p>Size</p>
            <p>1 Core, 6 GB Memory</p>
          </HeaderSections>
        </Header>

        <Control>
          <ControllButtons>Start</ControllButtons>
          <ControllButtons>Stop</ControllButtons>
        </Control>
      </Container>
    </div>
  );
};

export default Dashboard;
