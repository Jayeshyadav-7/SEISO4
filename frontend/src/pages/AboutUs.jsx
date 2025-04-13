import gloab from "../assets/gloab_bg.gif";
import CurserBgSm from "../components/CurserBgSm";
import quoteRight from "../assets/quoteRight.svg";
import thirtyFive from "../assets/35.png";
import trans from "../assets/6J34GBYb.png";
import aftrans from "../assets/6J34GBYg.png";
import { FaArrowRightLong, FaArrowDownLong } from "react-icons/fa6";
import { useState } from "react";
import Button from "../components/Button";

function AboutUs() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div>
      <div
        className="fixed inset-0 bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: `url(${gloab})`,
        }}
      ></div>

      <CurserBgSm />
      <div>
        <div className="h-[50vh] w-full flex items-end justify-center font-extrabold text-white pb-20 xl:pb-16">
          <h1 className="text-5xl md:text-7xl font-montserrat">About Us</h1>
        </div>
        <div className="bg-[rgba(0,0,0,0.7)] px-5 xl:px-16 py-8">
          <div className="xl:flex">
            <div className="relative px-3 xl:px-24 pt-16 pb-36 xl:pt-16 xl:pb-44 xl:w-1/2">
              <div className="absolute top-0 left-0 text-center bg-yellow-400 border-4 border-white px-4 xl:px-6 py-2 xl:py-4 z-10 font-montserrat">
                <p className="text-5xl md:text-7xl font-bold">18+</p>
                <p className="font-semibold">years exprerience</p>
              </div>
              <div className="h-[50vh] xl:h-[70vh] w-full border-4 border-white"></div>
              <div className="absolute bottom-5 right-0 xl:right-10 bg-[#025893] border-4 border-white px-4 xl:px-8 py-4 xl:py-14 z-10 font-montserrat w-[83%] xl:w-[60%] hover:bg-opacity-40">
                <p className="text-md xl:text-xl font-semibold xl:font-bold text-white">
                  &quot;Efficient waste management is the key to a cleaner
                  environment and a sustainable future.&quot;
                </p>
              </div>
              <img
                src={quoteRight}
                alt=""
                className="absolute h-10 bottom-0 right-5 xl:right-16 z-10"
              />
            </div>
            <div className="xl:w-1/2 text-center xl:text-left xl:my-auto xl:px-5 text-white font-montserrat py-14 space-y-7">
              <h2 className="text-xl text-lime-500 font-bold">About Seiso</h2>
              <h1 className="text-4xl font-extrabold ">Welcome to Seiso</h1>
              <div className="space-y-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus reprehenderit quia obcaecati voluptatibus corporis,
                  alias quidem eum at eaque. Tenetur soluta quasi consequuntur
                  esse saepe minima maxime quidem amet officiis.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Error tempore nostrum labore facere distinctio voluptate
                  similique aspernatur quos! Ut tempore quis rem quos quae
                  facere id, quasi quaerat magnam repellat?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet impedit itaque dicta odio eum dignissimos modi cumque
                  ducimus maxime in excepturi sequi facilis quas, possimus quam!
                  Nesciunt quibusdam beatae earum?
                </p>
              </div>
            </div>
          </div>
          <div className="xl:flex space-y-4 xl:space-y-0 gap-4 xl:mt-20">
            <div className="bg-lime-500 text-center p-6 space-y-2 font-montserrat hover:bg-opacity-30 xl:w-1/3 xl:py-12 xl:px-12">
              <img src={thirtyFive} alt="" className="h-16 xl:h-24 mx-auto" />
              <h2 className="text-xl xl:text:2xl font-extrabold">
                Want Pan India Presence
              </h2>
              <p className="xl:text-md">
                Multiple location, Multiple waste stream, One vendor
              </p>
            </div>
            <div className="bg-lime-500 text-center p-6 space-y-2 font-montserrat hover:bg-opacity-30 xl:w-1/3 xl:py-12 xl:px-12">
              <img src={trans} alt="" className="h-16 xl:h-24 mx-auto" />
              <h2 className="text-xl xl:text:2xl font-extrabold">
                Transparent & legally compliant
              </h2>
              <p className="xl:text-md">
                Three-Step Data Authentication Process, Brand Protection,
                Trusted by leading national and multinational brands
              </p>
            </div>
            <div className="bg-lime-500 text-center p-6 space-y-2 font-montserrat hover:bg-opacity-30 xl:w-1/3 xl:py-12 xl:px-12">
              <img src={aftrans} alt="" className="h-16 xl:h-24 mx-auto" />
              <h2 className="text-xl xl:text:2xl font-extrabold">
                Sustainability
              </h2>
              <p className="xl:text-md">
                GRI Based Sustainability Reporting – data on reduction of Green
                House Gas emission, Circular Economy - Closed Loop Recycling
                Services.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="font-montserrat xl:flex xl:flex-row-reverse mt-16">
            <div className="text-center space-y-6 w-full xl:w-1/2 xl:p-10 xl:pt-5">
              <h1 className="text-3xl text-lime-500 font-bold">Our Mission</h1>
              <p className="text-white text-md">
                Our mission is to keep as much waste from ending up in local
                landfills as we can.
              </p>

              {/* Sections */}
              {[
                {
                  title: "Reduce Waste",
                  content:
                    "Reduce waste by adopting sustainable practices and minimizing unnecessary consumption.",
                },
                {
                  title: "Re-use",
                  content:
                    "Encourage re-use of materials to extend their lifecycle and reduce environmental impact.",
                },
                {
                  title: "Re-cycling",
                  content:
                    "Promote recycling initiatives to convert waste into reusable resources and support a circular economy.",
                },
              ].map((section, index) => (
                <div
                  key={index}
                  className="border-b-2 border-lime-400 py-6 space-y-5"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">
                      {section.title}
                    </h3>
                    <div
                      className="flex items-center justify-center mr-6 cursor-pointer text-white"
                      onClick={() => toggleSection(index)}
                    >
                      {openSection === index ? (
                        <FaArrowDownLong />
                      ) : (
                        <FaArrowRightLong />
                      )}
                    </div>
                  </div>
                  {openSection === index && (
                    <div className="mt-2 text-white text-left">
                      <p>{section.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="bg-lime-400 bg-opacity-20 mt-16 xl:mt-0 py-10 px-6 xl:w-1/2 xl:py-44 xl:px-12">
              <h2 className="text-white text-3xl font-bold">Request pickup</h2>
              <div className="mt-10">
                <Button to="/requestpickup" text="Request" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default AboutUs;
