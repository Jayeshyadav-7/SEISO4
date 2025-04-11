import {
  FaInstagram,
  FaLinkedinIn,
  FaSquareFacebook,
  FaYoutube,
} from "react-icons/fa6";
// import Button from "./Button";

// import { ScrollingTextFooter } from "./ScrollingText/ScrollingTextFooter";
import Button from "./Button";
import SmartBin from "../assets/SmartBin.png";
import { Link } from "react-router";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

// export const Footer = () => {
//   return (
//     <>
//       <div
//         className="h-60 w-1/2 bg-green-200 rounded-3xl absolute bottom-2"
//         style={{
//           background: "linear-gradient(45deg, #ffffff, #a7f3d0)", // Diagonal gradient
//         }}
//       ></div>
//       <footer className="bg-gray-900 text-white py-10">
//         <div className="container mx-auto px-6 md:px-12">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {/* Info Section */}
//             <div>
//               <h3 className="font-semibold mb-4">INFO</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link to="#" className="hover:text-gray-300">
//                     Formats
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#" className="hover:text-gray-300">
//                     Compression
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#" className="hover:text-gray-300">
//                     Pricing
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#" className="hover:text-gray-300">
//                     FAQ
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#" className="hover:text-gray-300">
//                     Status
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             {/* Resources Section */}
//             <div>
//               <h3 className="font-semibold mb-4">RESOURCES</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link to="#" className="hover:text-gray-300">
//                     Developer API
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#" className="hover:text-gray-300">
//                     Tools
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#" className="hover:text-gray-300">
//                     Blog
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             {/* Company Section */}
//             <div>
//               <h3 className="font-semibold mb-4">COMPANY</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link to="#" className="hover:text-gray-300">
//                     About Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#" className="hover:text-gray-300">
//                     Sustainability
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#" className="hover:text-gray-300">
//                     Terms of Service
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#" className="hover:text-gray-300">
//                     Privacy
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             {/* Newsletter Section */}
//             <div>
//               <h3 className="font-semibold mb-4">
//                 Subscribe to our email newsletter
//               </h3>
//               <form className="flex items-center space-x-2">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="w-full px-4 py-2 text-gray-900 rounded focus:outline-none"
//                 />
//                 <Button text="Subscribe" to="#email" />
//               </form>
//               <div className="mt-6">
//                 <h4 className="font-semibold mb-2">Follow us</h4>
//                 <div className="flex space-x-4">
//                   <Link to="#" className="hover:text-green-500">
//                     <FaInstagram />
//                   </Link>
//                   <Link to="#" className="hover:text-green-500">
//                     <FaLinkedinIn />
//                   </Link>
//                   <Link to="#" className="hover:text-green-500">
//                     <FaSquareFacebook />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

export const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <footer className="relative md:mt-32 bg-black rounded-t-3xl">
      {/* Gradient Background */}
      <div className="md:h-60 md:w-3/4 sm:w-1/2 rounded-t-3xl md:rounded-3xl md:absolute md:bottom-96 md:left-1/2 md:-translate-x-1/2 bg-gradient-to-r from-lime-100 via-lime-500 to-lime-500 flex flex-col-reverse md:flex-row overflow-hidden">
        <div className="md:w-1/2 md:h-full flex flex-col justify-center px-8 md:px-24 gap-4 my-4">
          <h1 className="text-3xl md:text-4xl text-black font-semibold">
            Let&apos;s Make It Happen Together
          </h1>
          <form action="" className="space-x-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-green-50 text-gray-700 border-2 border-lime-300 rounded-full md:mt-2 w-40 md:w-auto px-4 p-2 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />

            <Button text="Submit" />
          </form>
        </div>
        <div className="md:w-1/2 md:h-full">
          <img
            className="w-full h-full object-cover object-center"
            src={SmartBin}
            alt=""
          />
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="bg-black text-white py-6 md:pt-40">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 text-lime-400">Seiso</h2>
            <p className="text-gray-200 text-sm md:text-base px-4 sm:px-0">
              At the heart of our waste management process is a commitment to
              nature, harmonized with science.
            </p>
            <div className="flex justify-center md:justify-normal items-center gap-8 mt-4 text-xl">
              <Link to="">
                <FaInstagram />
              </Link>
              <Link to="">
                <FaLinkedinIn />
              </Link>
              <Link to="">
                <FaSquareFacebook />
              </Link>
              <Link to="">
                <FaYoutube />
              </Link>
            </div>
          </div>

          {/* quick links Section */}
          <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left sm:pl-16">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul>
              {[
                "Home",
                "About Us",
                "Dashboard",
                "Schedule Pickup",
                "Get Reward",
                "Store",
              ].map((link, index) => (
                <li key={index}>
                  <Link to="/" className="hover:text-gray-400 text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Services</h2>

            <ul className="space-y-2">
              {[
                "Residential Waste Collection",
                "Commercial Waste Management",
                "Industrial Waste Management",
                "E-Waste Management Service",
                "Event Waste Management Service",
                "Purchase of Scrap",
              ].map((service, index) => (
                <li key={index}>
                  <Link to="/" className="hover:text-gray-400 text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <div className="flex items-center gap-5">
              <div className="text-xl">
                <MdAttachEmail />
              </div>
              <p className="text-gray-400 mb-4 text-sm md:text-base">
                jayeshyadav823@gmail.Com
              </p>
            </div>
            <div className="flex items-center gap-5">
              <div className="text-xl">
                <FaPhoneVolume />
              </div>
              <p className="text-gray-400 mb-4 text-sm md:text-base">
                +91 7004099889
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r to-black via-lime-200 from-lime-600"></div>
      <div className="flex flex-col md:flex-row items-center justify-between lg:px-20 py-6 bg-black text-gray-300">
        <p>Copyright &copy; {year} All Rights Reserved.</p>
        <p>
          Designed by{" "}
          <span className="text-xl font-semibold">Jayesh Yadav</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
