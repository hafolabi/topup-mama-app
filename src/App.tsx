import React from "react";
import Topbar from "./components/Topbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />}/>
        </Routes>

        <Routes>
        <Route path="/register" element={<Register />}/>
        </Routes>

        <Routes>
        <Route path="/login" element={<Login />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
