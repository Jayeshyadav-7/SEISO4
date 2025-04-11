// import React, { useState, useContext } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { UserDataContext } from "../contexts/UserContext";

// const Login = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const { setUser } = useContext(UserDataContext);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         `${import.meta.env.VITE_BASE_URL}/users/login`,
//         {
//           phoneNumber,
//           password,
//         }
//       );

//       localStorage.setItem("token", res.data.token);

//       // Fetch user data
//       const userRes = await axios.get(
//         `${import.meta.env.VITE_BASE_URL}/users/user`,
//         {
//           headers: { Authorization: `Bearer ${res.data.token}` },
//         }
//       );

//       setUser(userRes.data); // Save to context
//       navigate("/dashboard");
//     } catch (error) {
//       console.error("Login failed", error);
//       alert("Login failed");
//     }
//   };

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ban2 from "../assets/ban2.jpg";
import CurserBgSm from "../components/CurserBgSm";
import Button from "../components/Button";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      phoneNumber: phoneNumber,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    }

    setPhoneNumber("");
    setPassword("");
  };

  return (
    <div>
      <div
        className="fixed inset-0 bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: `url(${ban2})`,
        }}
      ></div>

      <CurserBgSm />

      <div>
        <div className="h-[30vh] xl:h-[50vh] w-full flex items-end justify-center font-extrabold text-white px-5 pb-16 xl:pb-16">
          <h1 className="text-5xl md:text-7xl font-montserrat">User Login</h1>
        </div>

        <div className="bg-[rgba(0,0,0,0.7)] px-5 xl:px-16 py-6 xl:py-0">
          <p className="text-white">
            dont have account:{" "}
            <Link to="/signup" className="text-lime-500">
              Create one
            </Link>
          </p>
          <div className="flex justify-center items-center min-h-[52vh] bg-transparent">
            <div className="w-full max-w-3xl bg-transparent">
              <form onSubmit={submitHandler} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                    required
                  />
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                    required
                  />
                </div>
                {/* Submit Button */}
                <Button text="Submit" />
                <p className="text-white">
                  Go ahead, get your rewards, and sparkle the process.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <form onSubmit={submitHandler}>
    //   <input
    //     placeholder="Phone Number"
    //     value={phoneNumber}
    //     onChange={(e) => setPhoneNumber(e.target.value)}
    //   />
    //   <input
    //     placeholder="Password"
    //     value={password}
    //     type="password"
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <button type="submit">Login</button>
    // </form>
  );
};

export default Login;
