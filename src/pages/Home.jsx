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
  const facebook =
    "https://www.facebook.com/profile.php?id=100064936054672&mibextid=ZbWKwL";
  const instagram =
    "https://www.instagram.com/shreeji_shoes_and_menswear?igsh=MWI5YXVncHhlZXFsMQ==";
  const email = "mailto:hardikparmar9964@gmail.com";
  const whatsup = "https://api.whatsapp.com/send?phone=9099735695";
  const map =
    "https://www.google.com/maps/place/Shreeji+shoes+%26+meanswear/@23.0076416,71.1821666,16.75z/data=!4m14!1m7!3m6!1s0x395a2bd4987f3f39:0x2908aeaa2fef519!2sShreeji+shoes+%26+meanswear!8m2!3d23.0076002!4d71.1850075!16s%2Fg%2F11fm6qxw9j!3m5!1s0x395a2bd4987f3f39:0x2908aeaa2fef519!8m2!3d23.0076002!4d71.1850075!16s%2Fg%2F11fm6qxw9j?entry=ttu";
  return (
    <div className="w-full">
      <div className="flex w-full justify-center h-96">
        <img src={Icon} alt="Icon" />
      </div>
      <div className="flex w-full items-center flex-col">
        <h1 className="text-2xl font-extrabold">Welcome to</h1>
        <h2 className="text-xl font-serif">Shreeji Shoes & Mens Wear</h2>
      </div>
      <div
        className="flex justify-center w-full flex-wrap mt-6 p-5 overflow-x-hidden"
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <p className="text-center">
          "Your Ultimate Destination for Stylish Footwear and Menswear!"
        </p>
      </div>

      <div className="flex flex-col justify-center mt-10 items-center">
        <div className="font-semibold">
          <h1>Contact us:</h1>
        </div>
        <div className="flex mt-3 gap-5">
          <Link
            to={`tel:${phoneNumber}`}
            className="inline-block text-2xl p-2 border rounded-full border-black"
          >
            <FaPhoneAlt />
          </Link>
          <Link
            to={whatsup}
            className="inline-block text-2xl p-2 border rounded-full border-black"
          >
            <FaWhatsapp />
          </Link>
          <Link
            to={facebook}
            className="inline-block text-2xl p-2 border rounded-full border-black"
          >
            <FaFacebook />
          </Link>
          <Link
            to={instagram}
            className="inline-block text-2xl p-2 border rounded-full border-black"
          >
            <FaInstagram />
          </Link>
          <Link
            to={email}
            className="inline-block text-2xl p-2 border rounded-full border-black"
          >
            <BiLogoGmail />
          </Link>
        </div>
      </div>
      <div className="flex flex-col mt-6 items-center ">
        <div className="font-semibold flex items-center justify-center gap-2   ">
          <h1>Address </h1>
          <Link to={map}>
            <FaMapMarkerAlt />
          </Link>
        </div>
        <div className="m-2 flex justify-center items-center gap-2 w-full flex-wrap text-center ml-1 mr-1">
          <span className="text-lg">
            Sara road,Near by shishu mandir school - halvad
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
