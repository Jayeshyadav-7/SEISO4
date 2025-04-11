import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserContext from "./contexts/UserContext";
import UserProtectedWrapper from "./components/UserProtectWrapper";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <UserProtectedWrapper>
              <Dashboard />
            </UserProtectedWrapper>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
