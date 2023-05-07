import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SignupSuccess from "./components/SignupSuccess";
import Dashboard from "./components/Dashboard";
import { useState } from "react";

function App() {
  const [host, setHost] = useState("https://host.helpinghands.tk");
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard host={host} />} />
        <Route path="/login" element={<Login host={host} />} />
        <Route path="/signup" element={<Signup host={host} />} />
        <Route path="/signup/success" element={<SignupSuccess />} />
        <Route path="/" element={<Login host={host} />} />
      </Routes>
    </>
  );
}

export default App;
