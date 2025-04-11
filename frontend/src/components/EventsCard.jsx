import PropTypes from "prop-types";

const EventsCard = ({ imageUrl, bgColor = "bg-lime-600", name }) => {
  return (
    <div
      className="event h-40 w-full xl:w-1/4 rounded-2xl overflow-hidden"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`h-full w-full ${bgColor} p-5 hover:bg-transparent hover:text-white transition-all ease-linear duration-500 flex justify-center items-center`}
      >
        <h1 className="text-3xl font-extrabold">{name}</h1>
      </div>
    </div>
  );
};

EventsCard.propTypes = {
  imageUrl: PropTypes.string, // URL of the background image
  bgColor: PropTypes.string, // Tailwind class for background color
  name: PropTypes.string.isRequired, // Name or title to display
};

export default EventsCard;
