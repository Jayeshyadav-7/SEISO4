import { useEffect, useState } from "react";
import ban2 from "../assets/ban2.jpg";
import CurserBgSm from "../components/CurserBgSm";
import axios from "axios";
import LeaderboardCard from "../components/LeaderboardCard";
import { UserDataContext } from "../contexts/UserContext";

function LeaderBoard() {
  // const { user } = useContext(UserDataContext);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/leaderboard`, {
        withCredentials: true,
      })

      .then((response) => {
        setUsers(response.data); // Store API response in state
      })
      .catch((error) => {
        console.error("Error fetching top contributors:", error);
      });
  }, []);
  return (
    <div>
      <div
        className="fixed inset-0 bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: `url(${ban2})`,
        }}
      ></div>

      <CurserBgSm />
      {console.log(users)}
      <div>
        <div className="h-[50vh] w-full flex items-end justify-center font-extrabold text-white pb-20 xl:pb-16">
          <h1 className="text-5xl md:text-7xl font-montserrat">Leaderboard</h1>
        </div>

        <div className="grid grid-cols-2 gap-5 px-5 pb-10">
          {users.map((user, index) => (
            <LeaderboardCard
              key={index}
              index={index} // Pass index
              username={user.name}
              profilepicture={user.profilepicture}
              gender={user.gender}
              rewards={user.rewards}
              wastes={user.wastes}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
