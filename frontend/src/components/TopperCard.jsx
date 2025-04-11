import PropTypes from "prop-types";
import maleAvatar from "../assets/maleavatar.jpg";
import femaleAvatar from "../assets/femaleavatar.jpg"; // Add female avatar

const TopperCard = ({
  imageUrl,
  bgColor = "bg-lime-400",
  name,
  description,
  gender,
}) => {
  // Determine default avatar based on gender
  const defaultAvatar = gender === "female" ? femaleAvatar : maleAvatar;

  return (
    <div
      className="h-56 w-56 rounded-2xl overflow-hidden"
      style={{
        backgroundImage: `url(${imageUrl || defaultAvatar})`, // Use user image or default avatar
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`h-full w-full ${bgColor} p-5 opacity-0 hover:opacity-100 transition-all ease-linear duration-500`}
      >
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
};

TopperCard.propTypes = {
  imageUrl: PropTypes.string, // URL of the profile picture
  bgColor: PropTypes.string, // Tailwind class for background color
  name: PropTypes.string.isRequired, // Name of contributor
  description: PropTypes.string.isRequired, // Additional details
  gender: PropTypes.string, // Gender to determine default avatar
};

export default TopperCard;
