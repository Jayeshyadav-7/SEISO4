import axios from "axios";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import Button from "../components/Button";
import ban5 from "../assets/ban5.jpg";
import CurserBgSm from "../components/CurserBgSm";
import beTheLund from "../assets/beTheLund.svg";
import { UserDataContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function SubmitWasteId() {
  const [wasteId, setWasteId] = useState("");
  const { user } = useContext(UserDataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/waste/verifywaste`,
        { wasteId },
        { userId: user._id },
        { withCredentials: true }
      );

      // Check for successful response
      if (response.status === 200) {
        toast.success("Waste ID verified successfully!");
        console.log(response.data);
        navigate("/dashboard");
      }

      if (response.status === 400) {
        alert("Invalid waste ID");
        console.log(response.data);
      }
    } catch (error) {
      // Handle errors
      const errorMessage =
        error.response?.data?.error || "An error occurred. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: `url(${ban5})`,
        }}
      ></div>

      <CurserBgSm />

      <div>
        <div className="h-[50vh] w-full flex items-end justify-center font-extrabold text-white px-5 pb-16 xl:pb-16">
          <h1 className="text-5xl md:text-7xl font-montserrat">
            Submit waste ID
          </h1>
        </div>
        <div className="bg-[rgba(0,0,0,0.7)] px-5 xl:px-16 py-0">
          <div className="flex flex-col justify-center items-center min-h-screen bg-transparent gap-20">
            <div className="xl:flex flex-row-reverse space-y-12 xl:space-y-0">
              <div className="w-full xl:w-1/2 bg-transparent xl:px-10 xl:pl-24">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    id="wasteid"
                    value={wasteId}
                    onChange={(e) => setWasteId(e.target.value)}
                    placeholder="Enter Waste ID"
                    required
                    className="w-full px-4 py-3 border border-gray-300 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                  />
                  <Button text="Submit" />
                </form>
              </div>
              <div className="w-full xl:w-1/2 xl:px-10 xl:pr-24 text-white text-xl text-center xl:text-left">
                <p className="my-auto">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                  pariatur quidem aspernatur itaque magni exercitationem totam
                  dolorum amet quam cumque id doloremque velit, atque rerum
                  veritatis dignissimos? Sed nulla sequi rem officiis facere
                  fugiat cumque saepe. Ullam laborum dolore eligendi.
                </p>
              </div>
            </div>
            <img src={beTheLund} alt="" className="h-5/6 md:h-2/3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmitWasteId;
