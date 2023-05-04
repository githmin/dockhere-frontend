import { Button, Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

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

  @media (max-width: 645px) {
    flex-direction: column;
  }
`;

const HeaderSections = styled.div`
  padding: 1rem;
  @media (max-width: 645px) {
    padding: 0rem 1rem;
  }
`;

const Control = styled.div`
  /* border: 1px solid black; */
  margin-top: 1rem;
  padding: 1rem;
  gap: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 4px;
  border: 1px solid grey;

  @media (max-width: 645px) {
    flex-direction: column;
  }
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

  &:disabled {
    background-color: grey;
    cursor: none;
  }

  &:hover {
    background-color: #0a46e4;
    border-color: #0a46e4;
  }
  &:first-of-type {
    margin-right: 10px;
  }
`;
const Dashboard = (props) => {
  const [domain, setDomain] = useState("");
  const [password, setPassword] = useState("");
  const [port, setPort] = useState("");
  const [username, setUsername] = useState("");
  const [os, setOs] = useState("");
  const [ram, setRam] = useState("");
  const [cpu, setCpu] = useState("");
  const navitage = useNavigate();

  const instance = axios.create({
    withCredentials: true,
    baseURL: props.host,
  });
  const handelStart = () => {
    instance
      .post("/api/container", {
        command: "start",
      })
      .then((res) => {
        setDomain(res.data.domain);
        setPassword(res.data.password);
        setPort(res.data.port);
        setUsername(res.data.username);
        setOs(res.data.os);
        setRam(res.data.ram);
        setCpu(res.data.cpu);
      })
      .catch((res) => {
        console.log(res);
        if (res.response.status === 500) {
          return;
        }
        if (res.response.status === 403 || 401) {
          navitage("/login");
        }
      });
  };
  const handelDelete = () => {
    instance
      .post("/api/container", {
        command: "delete",
      })
      .then((res) => {
        setDomain("");
        setPassword("");
        setPort("");
        setUsername("");
        setOs("");
        setRam("");
        setCpu("");
      })
      .catch((res) => {
        console.log(res);
        if (res.response.status === 500) {
          return;
        }
        if (res.response.status === 403 || 401) {
          navitage("/login");
        }
      });
  };

  const handelStats = () => {
    instance
      .get("/api/container/stats")
      .then((res) => {
        setOs(res.data.os);
        setDomain(res.data.domain);
        setRam(res.data.ram);
        setCpu(res.data.cpu);
        setPassword(res.data.password);
        setPort(res.data.port);
        setUsername(res.data.username);
      })
      .catch((res) => {
        console.log(res);
        if (res.response.status === 500) {
          return;
        }
        if (res.response.status === 403 || 401) {
          navitage("/login");
        }
      });
  };

  useEffect(() => {
    handelStats();
    // eslint-disable-next-line
  }, []);

  setInterval(() => {
    handelStats();
  }, 60000);

  const handelLogout = () => {
    instance
      .post("/api/auth/logout")
      .then(() => {
        navitage("/login");
      })
      .catch((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <Container>
        <MainHeader>
          <MainHeading>Dashboard</MainHeading>
          <p onClick={handelLogout}>LOG OUT</p>
        </MainHeader>
        <Header>
          <HeaderSections>
            <p>Operating System</p>
            <p>{os === "" ? "N/A" : os}</p>
          </HeaderSections>
          <HeaderSections>
            <p>Host</p>
            <p>
              {domain === "" ? "N/A" : domain}:{port === "" ? "" : port}
            </p>
          </HeaderSections>
          <HeaderSections>
            <p>CPU</p>
            <p>{cpu === "" ? "N/A" : cpu}</p>
          </HeaderSections>
          <HeaderSections>
            <p>Ram</p>
            <p>{ram === "" ? "N/A" : ram}</p>
          </HeaderSections>
        </Header>

        <Control>
          <div>
            <ControllButtons onClick={handelStart}>Start</ControllButtons>
            <ControllButtons onClick={handelDelete}>Stop</ControllButtons>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {domain === "" ? "" : `ssh ${username}@${domain} -p ${port}`}
            {domain === "" ? (
              ""
            ) : (
              <Button>
                <ContentCopyIcon
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `ssh ${username}@${domain} -p ${port}`
                    );
                  }}
                />
              </Button>
            )}
          </div>
        </Control>
      </Container>
    </div>
  );
};

export default Dashboard;
