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
import SubmitWasteId from "./pages/SubmitWasteId";
import { ToastContainer } from "react-toastify";
import AboutUs from "./pages/AboutUs";
import RequestPickup from "./pages/RequestPickup";
import LeaderBoard from "./pages/LeaderBoard";

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
        <Route
          path="/submitwasteid"
          element={
            <UserProtectedWrapper>
              <SubmitWasteId />
            </UserProtectedWrapper>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/requestpickup"
          element={
            <UserProtectedWrapper>
              <RequestPickup />
            </UserProtectedWrapper>
          }
        />
        <Route path="/leaderboard" element={<LeaderBoard />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
