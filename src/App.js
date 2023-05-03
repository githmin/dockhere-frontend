import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";

function App() {
  const [host, setHost] = useState("http://localhost:4001");
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login host={host} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
