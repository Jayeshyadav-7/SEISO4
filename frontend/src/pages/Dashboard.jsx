import React, { useContext } from "react";
import { UserDataContext } from "../contexts/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserDataContext);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.name}!</p>
      <p>Phone Number: {user.phoneNumber}</p>
    </div>
  );
};

export default Dashboard;
