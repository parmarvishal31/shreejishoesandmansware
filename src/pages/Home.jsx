import React from "react";
import Icon from "../assets/shoes___mens_wear.png";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";

function Home() {
  const phoneNumber = "+919099735695";
  return (
    <div className="w-full">
      <div className="flex w-full justify-center h-96">
        <img src={Icon} alt="Icon" />
      </div>
      <div className="flex w-full items-center flex-col">
        <h1 className="text-2xl font-extrabold">Welcome to</h1>
        <h2 className="text-xl font-serif">Shreeji Shoes & Mens Wear</h2>
      </div>
      <div className="flex justify-center w-full flex-wrap mt-6 p-5 overflow-x-hidden" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
  <p className="text-center">
    "Your Ultimate Destination for Stylish Footwear and Menswear!"
  </p>
</div>

      <div className="flex flex-col justify-center mt-10 items-center">
        <div className="font-semibold">
          <h1>Contact us:</h1>
        </div>
        <div className="flex mt-3 gap-5">
          <Link to={`tel:${phoneNumber}`} className="inline-block text-2xl p-2 border rounded-full border-black">
            <FaPhoneAlt />
          </Link>
          <Link to='/' className="inline-block text-2xl p-2 border rounded-full border-black">
            <FaWhatsapp />
          </Link>
          <span className="inline-block text-2xl p-2 border rounded-full border-black">
            <FaFacebook />
          </span>
          <span className="inline-block text-2xl p-2 border rounded-full border-black">
            <FaInstagram />
          </span>
          <span className="inline-block text-2xl p-2 border rounded-full border-black">
            <BiLogoGmail />
          </span>
        </div>
      </div>
      <div className="flex flex-col mt-6 items-center ">
        <div className="font-semibold flex items-center justify-center gap-2   ">
          <h1>Address  </h1><span><FaMapMarkerAlt /></span>
        </div>
        <div className="m-2 flex justify-center items-center gap-2 w-full flex-wrap text-center ml-1 mr-1">
         
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, odit.</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
