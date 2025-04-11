import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Button({ text, onClick, to, className = "" }) {
  const baseClass =
    "px-6 py-3 bg-black border-2 hover:border-3 text-white hover:text-lime-500 font-bold text-md hover:border-lime-600 border-lime-400 rounded-full";

  return to ? (
    <Link to={to} className={`${baseClass} ${className}`}>
      {text}
    </Link>
  ) : (
    <button className={`${baseClass} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
