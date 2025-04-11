import { useState, useEffect, useRef } from "react";
import SeisoLogo from "../assets/SeisoLogo.svg";
import Button from "./Button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import PropTypes from "prop-types";
import binIcon2 from "../assets/binIcon2.png";
// import { useOutletContext } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ start }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [userId, setUserId] = useState(null);
  const navRef = useRef(null);
  // const { userId } = useOutletContext();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/submit-waste-id", label: "Submit ID" },
    { to: "/requestpickup", label: "Request Pickup" },
    { to: "/leaderboard", label: "Leaderboard" },
    // { to: "/contactus", label: "Contact Us" },
    // { to: "/seisostore", label: "Store" },
    // { to: `/dashboard/${userId}`, label: "Dashboard" },
    { to: "/virtualbin", label: "Virtual Bin" },
  ];

  // GSAP Scroll Animation
  useEffect(() => {
    gsap.to(navRef.current, {
      backgroundColor: "#000",
      duration: 0.1,
      height: "110px",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: navRef.current,
        scroller: "body",
        start: "top -2%",
        end: "top -4%",
        scrub: 1,
      },
    });
  }, []);

  useEffect(() => {
    // const storedUserId = localStorage.getItem("userId");
    // setUserId(storedUserId);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed w-screen flex justify-between items-center px-4 xl:px-10 py-9 z-20 transition-all duration-200"
      >
        {/* Logo */}
        <div className="flex items-center">
          <img src={SeisoLogo} alt="Seiso Logo" className="h-12 sm:h-20" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-green-500 focus:outline-none flex-col text-center justify-center -space-y-3"
          >
            <img src={binIcon2} alt="" className="h-8 mx-auto" />
            <p>menue</p>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`hidden lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 `}
        >
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`${
                start && label === "Home" ? "hidden" : ""
              } text-gray-100 text-lg font-semibold hover:text-lime-500 transition duration-200`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop Login Button */}
        <div className="hidden lg:block space-x-2">
          <Button text="Login" to="login" />
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute text-white font-sans bg-black border-2 border-lime-300 flex flex-col justify-center items-center gap-4 top-28 right-5 px-8 py-8 rounded-xl`}
        >
          <div className="mb-3">
            <Button text="login" to="Login" />
          </div>
          {/* <Link to={`dashboard/${userId}`}>Dashboard</Link> */}
          <Link to="submit-waste-id">Submit waste ID</Link>
          <Link to="requestpickup">Request pickup</Link>
          <Link to="aboutus">About us</Link>
          <Link to="virtualbin">Virtual Bin</Link>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  start: PropTypes.bool.isRequired,
};

export default Navbar;
