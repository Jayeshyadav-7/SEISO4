import React, { useEffect, useState, useRef } from "react";
import { UserDataContext } from "../contexts/UserContext";
import CurserBgSm from "../components/CurserBgSm";
import Factora from "../assets/Factora.webm";
import Button from "../components/Button";
import ScrollingTextFooter from "../components/ScrollingTextFooter";
import TopperCard from "../components/TopperCard";
import axios from "axios";
import dotsSide from "../assets/dotsSide.svg";
import SeisoStreet from "../assets/SeisoStreet.jpg";
import SeisoLake from "../assets/SeisoLake.jpg";
import DirtyLake from "../assets/DirtyLake.png";
import DirtyStreet from "../assets/DirtyStreet.jpeg";
import BeachBin from "../assets/BeachBin.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import quoteLeft from "../assets/quoteLeft.svg";
import quoteRight from "../assets/quoteRight.svg";
import EventsCard from "../components/EventsCard";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  // const { user } = useContext(UserDataContext);
  const [topContributers, setTopContributors] = useState([]); // State to store top contributors

  const mainRef = useRef(null);

  useEffect(() => {
    gsap.to(mainRef.current, {
      scrollTrigger: {
        trigger: mainRef.current,
        scroller: "body",
        // markers: true,
        start: "top -40%",
        end: "top -55%",
        scrub: 2,
      },
      backgroundColor: "rgba(0, 0, 0, 0.9)",
    });
  });

  const topRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      topRef.current,
      { y: 90, opacity: 0 }, // Starting state
      {
        y: 0, // Ending state
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: topRef.current,
          scroller: "body",
          // markers: true,
          start: "top 75%",
          end: "top 65%",
          scrub: 1,
        },
      }
    );
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/topcontributers`, {
        withCredentials: false,
      })
      .then((response) => {
        setTopContributors(response.data); // Store API response in state
      })
      .catch((error) => {
        console.error("Error fetching top contributors:", error);
      });
  }, []);

  const aboutusRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutusRef.current,
      { y: 90, opacity: 0 }, // Starting state
      {
        y: 0, // Ending state
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: aboutusRef.current,
          scroller: "body",
          // markers: true,
          start: "top 75%",
          end: "top 65%",
          scrub: 1,
        },
      }
    );
  }, []);

  const lQuoteRef = useRef(null);
  const rQuoteRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      lQuoteRef.current,
      { y: -60, x: -90 }, // Starting state
      {
        y: 0, // Ending state
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: lQuoteRef.current,
          scroller: "body",
          // markers: true,
          start: "top 65%",
          end: "top 55%",
          scrub: 1,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      rQuoteRef.current,
      { y: 50, x: 70 }, // Starting state
      {
        y: 0, // Ending state
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: lQuoteRef.current,
          scroller: "body",
          // markers: true,
          start: "top 65%",
          end: "top 55%",
          scrub: 1,
        },
      }
    );
  }, []);

  const lastRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      lastRef.current,
      { y: 90, opacity: 0 }, // Starting state
      {
        y: 0, // Ending state
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: lastRef.current,
          scroller: "body",
          // markers: true,
          start: "top 72%",
          end: "top 65%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div>
      <CurserBgSm />

      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed h-screen w-screen object-cover -z-10"
      >
        <source src={Factora} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* main */}
      <div ref={mainRef} className="relative">
        <div className="h-screen relative flex flex-col justify-center items-center text-center text-gray-200 gap-4 xl:gap-6 xl:pt-28 px-5 bg-[rgba(0,0,0,0.2)] z-0">
          <h1 className="hero-h1 text-6xl xl:text-9xl font-extrabold xl:font-bold relative">
            USE. SEISO. & EARN.
          </h1>
          <p className="text-2xl xl:text-3xl font-extrabold xl:font-semibold xl:w-1/2 text-center font-gilroy">
            WELCOME TO SEISO FAMILY!
          </p>
          <p className="xl:w-1/2 text-xl xl:text-2xl leading-6 text-center font-montserrat">
            Seiso Family is a multipurpose waste management facility that
            encourages people for proper disposal of waste and avoid throwing it
            in public places. We are passionate about technology, promoting
            cleanliness, and making the use of dustbins fun, profitable and
            accessible for everyone.
          </p>
          <p className="text-2xl leading-6 font-bold relative z-10 mt-5 font-montserrat">
            Get your reward
          </p>
          <Button text="Submit ID" to="/submitwasteid" className="btnScale" />
        </div>

        {/* scroling text  */}
        <ScrollingTextFooter />

        {/* Top contributers */}
        <div
          ref={topRef}
          className="flex items-center justify-center flex-col gap-10 mt-10 px-5"
        >
          <h1 className="text-3xl xl:text-5xl text-white font-semibold font-montserrat">
            TOP CONTRIBUTERS
          </h1>
          <div id="" className="xl:flex gap-14 space-y-5 xl:space-y-0">
            {topContributers.slice(0, 5).map((topper, index) => (
              <TopperCard
                key={index}
                imageUrl={topper.profilepicture}
                name={topper.name}
                // ${
                //   topper.lastname.charAt(0).toUpperCase() +
                //   topper.lastname.slice(1)
                // }`}
                description={`Collected ${topper.totalWasteCollected} kg waste last month and received rewards of Rs ${topper.totalRewardsEarned}`}
              />
            ))}
          </div>
        </div>

        {/* Sign up div  */}
        <div className="hidden xl:block">
          <div className="h-56 flex items-center justify-between mt-36 overflow-hidden bg-gradient-to-r from-lime-400 via-lime-500 to-lime-600 gap-20">
            <img
              src={dotsSide}
              alt=""
              className="h-screen w-64 transform rotate-180"
            />
            <div className="h-full flex justify-center items-center flex-col space-y-4 text-center">
              <h1 className="text-3xl font-semibold text-center font-montserrat">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus cum possimus voluptas eligendi molestiae veniam.
              </h1>
              <Button text="Sign up" to="/signup" />
            </div>
            <img src={dotsSide} alt="" className="h-screen w-64" />
          </div>
        </div>

        {/* signup div sm */}
        <div className="xl:hidden">
          <div className="relative h-40 xl:h-56 w-full mt-36 overflow-hidden bg-gradient-to-r from-lime-400 via-lime-500 to-green-600 xl:gap-20">
            <img
              src={dotsSide}
              alt=""
              className="absolute h-full xl:h-screen top-0 left-0 transform rotate-180"
            />
            <img
              src={dotsSide}
              alt=""
              className="absolute h-full xl:h-screen top-0 right-0"
            />
            <div className="text-center flex flex-col gap-6 h-full justify-center items-center px-5">
              <h1 className="text-md xl:text-3xl font-semibold text-center font-montserrat">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus cum possimus voluptas eligendi molestiae veniam.
              </h1>
              <div>
                <Button text="Sign up" to="signup" />
              </div>
            </div>
          </div>
        </div>

        {/* About us  */}
        <div ref={aboutusRef} className="hidden xl:block -space-y-10">
          <div className="flex justify-center items-center text-center p-24">
            <div
              className="h-56 w-1/2 rounded-2xl overflow-hidden"
              style={{
                backgroundImage: `url(${DirtyLake})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="h-full w-full bg-lime-400 p-5 opacity-0 hover:opacity-100 transition-all ease-linear duration-500 font-montserrat">
                <h1 className="text-2xl font-bold">A lake</h1>
                <p className="text-xl">Current situation of many lakes.</p>
              </div>
            </div>
            <div className="flex flex-col p-16 gap-5 font-montserrat">
              <h1 className="text-5xl text-white font-semibold">ABOUT US</h1>
              <p className="text-gray-200 text-xl">
                Home to a 46-bay, multi-tier, floodlit driving range, powered by
                Toptracer Range technology. Complimented by a practice green and
                bunker, coffee shop and American Golf Store. There truly is
                something for everyone as we also boast two outdoor 18-hole
                dinosaur themed crazy golf courses.
              </p>
            </div>
            <div
              className="h-56 w-1/2 rounded-2xl overflow-hidden"
              style={{
                backgroundImage: `url(${DirtyStreet})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="h-full w-full bg-lime-400 p-5 opacity-0 hover:opacity-100 transition-all ease-linear duration-500 font-montserrat">
                <h1 className="text-2xl font-bold">A lake</h1>
                <p className="text-xl">Current situation of many lakes.</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-28">
            <div
              className="h-56 rounded-2xl overflow-hidden"
              style={{
                backgroundImage: `url(${SeisoLake})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="h-full w-full bg-lime-400 p-5 opacity-0 hover:opacity-100 transition-all ease-linear duration-500 font-montserrat">
                <h1 className="text-2xl font-bold">A lake</h1>
                <p className="text-xl">Current situation of many lakes.</p>
              </div>
            </div>
            <div
              className="h-56 rounded-2xl overflow-hidden"
              style={{
                backgroundImage: `url(${BeachBin})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="h-full w-full bg-lime-400 p-5 opacity-0 hover:opacity-100 transition-all ease-linear duration-500 font-montserrat">
                <h1 className="text-2xl font-bold">A lake</h1>
                <p className="text-xl">Current situation of many lakes.</p>
              </div>
            </div>
            <div
              className="h-56 rounded-2xl overflow-hidden"
              style={{
                backgroundImage: `url(${SeisoStreet})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="h-full w-full bg-lime-400 p-5 opacity-0 hover:opacity-100 transition-all ease-linear duration-500 font-montserrat">
                <h1 className="text-2xl font-bold">A lake</h1>
                <p className="text-xl">Current situation of many lakes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* About us sm */}
        <div ref={aboutusRef} className="xl:hidden px-5 mt-20 space-y-8">
          <div className="flex gap-5">
            <img src={SeisoStreet} alt="" className="w-[47%] rounded-md" />
            <img src={SeisoStreet} alt="" className="w-[47%] rounded-md" />
          </div>
          <div className="text-white text-center font-montserrat space-y-5">
            <h1 className="text-3xl font-extrabold font-sans">About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              ducimus voluptatibus, voluptas harum omnis itaque dolor nesciunt
              ut esse atque magnam ea eum aspernatur quasi eveniet neque
              repellat. Aperiam sint harum animi cupiditate optio itaque
              tempore, modi est veritatis nesciunt.
            </p>
          </div>
        </div>

        {/* Quote  */}
        <div className="min-h-[60vh] xl:min-h-[70vh] relative flex justify-center items-center text-center px-12">
          <img
            ref={lQuoteRef}
            className="absolute h-6 xl:h-16 left-5 xl:left-36 top-36 xl:top-24"
            src={quoteLeft}
            alt=""
          />
          <img
            ref={rQuoteRef}
            className="absolute h-6 xl:h-16 right-5 xl:right-36 bottom-36 xl:bottom-24"
            src={quoteRight}
            alt=""
          />
          <p className="text-2xl text-white font-bold xl:w-2/3 font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ratione
            quae temporibus, quasi sapiente accusamus nisi minima doloremque
            voluptate cupiditate?
          </p>
        </div>

        {/* Events section  */}
        <div className="-space-y-4 xl:-space-y-14 pb-16">
          <h1
            ref={lastRef}
            className="stroke text-[29px] xl:text-[104px] font-bold relative z-0 font-sans"
          >
            WHAT ARE YOT WAITING FOR?
          </h1>
          <div className="flex flex-col xl:flex-row justify-center items-center gap-5 xl:gap-24 relative z-10 px-5">
            <EventsCard imageUrl={SeisoStreet} name="ACHIVEMENTS" />
            <EventsCard imageUrl={SeisoStreet} name="TOPTRACER" />
            <EventsCard imageUrl={SeisoStreet} name="HACKATHONS" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
