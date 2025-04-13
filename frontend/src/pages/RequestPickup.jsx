import CurserBgSm from "../components/CurserBgSm";
import ban1 from "../assets/ban1.jpg";
import Button from "../components/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function RequestPickup() {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/requestpickup`,
        {
          fullname,
          phone,
          email,
          address,
          service,
          message,
        }
      );

      toast.success("Request sent successfully");
      console.log(response.data);

      setFullname("");
      setPhone("");
      setEmail("");
      setAddress("");
      setService("");
      setMessage("");
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "An error occurred. Please try again.";
      toast.error(errorMessage);
    }
  };
  return (
    <div>
      <div
        className="fixed inset-0 bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: `url(${ban1})`,
        }}
      ></div>

      <CurserBgSm />

      <div>
        <div className="h-[50vh] w-full flex items-end justify-center font-extrabold text-white px-5 pb-16 xl:pb-16">
          <h1 className="text-5xl md:text-7xl font-montserrat">
            Request Pickup
          </h1>
        </div>

        <div className="bg-[rgba(0,0,0,0.7)] px-5 xl:px-16">
          <div className="flex justify-center items-center min-h-screen bg-transparent">
            <div className="w-full max-w-3xl bg-transparent">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* First Row: Full Name, Phone, Email */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                    required
                  />
                </div>

                {/* Second Row: Service Required, Address */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                    required
                  >
                    <option value="" disabled selected className="text-black">
                      Service Required
                    </option>
                    <option value="general" className="text-black">
                      Sell waste
                    </option>
                    <option value="recycling" className="text-black">
                      Buy waste
                    </option>
                    <option value="hazardous" className="text-black">
                      Hazardous Waste
                    </option>
                  </select>
                  <input
                    type="text"
                    placeholder="Address *"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                    required
                  />
                </div>

                {/* Message Field */}
                <textarea
                  placeholder="Type Message *"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                  required
                ></textarea>

                {/* Submit Button */}
                <Button text="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestPickup;
