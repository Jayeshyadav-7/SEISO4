import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../contexts/UserContext";
import ban1 from "../assets/ban1.jpg";
import CurserBgSm from "../components/CurserBgSm";
import Button from "../components/Button";

function Signup() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      phoneNumber: phoneNumber,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/");
    }

    setPhoneNumber("");
    setName("");
    setPassword("");
  };

  return (
    <div>
      <div
        className="fixed inset-0 bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: `url(${ban1})`,
        }}
      ></div>

      <CurserBgSm />

      <div>
        <div className="h-[30vh] xl:h-[45vh] w-full flex items-end justify-center font-extrabold text-white px-5 pb-16 xl:pb-16">
          <h1 className="text-5xl md:text-7xl font-montserrat">Sign up</h1>
        </div>

        <div className="bg-[rgba(0,0,0,0.7)] px-5 xl:px-16 py-6 xl:py-0">
          <p className="text-white">
            already a user: &nbsp;
            <Link to="/login" className="text-lime-500">
              Login
            </Link>
          </p>
          <div className="flex justify-center items-center min-h-[52vh] bg-transparent">
            <div className="w-full max-w-3xl bg-transparent">
              <form onSubmit={submitHandler} className="space-y-4">
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                  required
                />
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

                {/* <select
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                    required
                  >
                    <option value="" disabled className="text-black">
                      Select Gender
                    </option>
                    <option value="male" className="text-black">
                      Male
                    </option>
                    <option value="female" className="text-black">
                      Female
                    </option>
                    <option value="other" className="text-black">
                      Other
                    </option>
                  </select> */}

                {/* Submit Button */}
                <Button text="Submit" />
                <p className="text-white">
                  One more step toward cleaner and greener India.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <form onSubmit={submitHandler}>
        <input
          required
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          required
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <input
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Submit</button>
      </form> */}
    </div>
  );
}

export default Signup;
