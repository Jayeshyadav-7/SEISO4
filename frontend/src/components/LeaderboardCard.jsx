import propTypes from "prop-types";
import femaleAvatar from "../assets/femaleavatar.jpg";
import maleAvatar from "../assets/maleavatar.jpg";

const LeaderboardCard = ({
  profilepicture,
  username,
  rewards,
  wastes,
  gender,
  // index, // Accept index as a prop
}) => {
  const defaultAvatar = gender === "male" ? maleAvatar : femaleAvatar;

  return (
    <div className="border-2 border-lime-200 px-2 py-2 rounded-lg">
      <div className="flex gap-5 h-52">
        <img
          src={profilepicture || defaultAvatar}
          alt={username}
          className="h-full w-52 rounded-md"
        />
        <div className="bg-lime-500 hover:bg-opacity-30 p-3 rounded-md">
          <h1 className="text-xl font-bold">{username}</h1>
          <p>
            Successfully prevented{" "}
            <span className="font-semibold">{wastes}</span> kg waste from being
            actually called waste and got rewards worth
            <span className="font-semibold"> Rs {rewards}</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

LeaderboardCard.propTypes = {
  profilepicture: propTypes.string,
  username: propTypes.string,
  gender: propTypes.string,
  rewards: propTypes.number,
  wastes: propTypes.number,
  // index: propTypes.number, // Add index to propTypes
};

export default LeaderboardCard;
