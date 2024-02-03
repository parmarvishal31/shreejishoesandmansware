import React, { useEffect, useState } from "react";
// import Icon from "../assets/shoes___mens_wear.png";
import Icon from "../assets/shoes-ezgif.com-video-to-webp-converter.webp";
import Icon1 from "../assets/1.png";
import Icon2 from "../assets/2.png";
import Icon3 from "../assets/3.png";
import Icon4 from "../assets/4.png";
import Icon5 from "../assets/5.png";
import Icon6 from "../assets/6.png";
import Icon7 from "../assets/7.png";


import { Carousel } from "flowbite-react";
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

  const products = [
    { id: 1, image: Icon1, title: "Shoes" },
    { id: 2, image: Icon2, title: "Sport t shirt" },
    { id: 3, image: Icon3, title: "Rings" },
    { id: 4, image: Icon4, title: "Belts" },
    { id: 5, image: Icon5, title: "Watches" },
    { id: 6, image: Icon6, title: "Night dress" },
    { id: 7, image: Icon7, title: "Parfums" },
  ];

  const carouselTheme = {
    root: {
      base: "relative h-full w-full",
      leftControl: "hidden",
      rightControl: "hidden",
    },
    indicators: {
      wrapper: "hidden", // Hide the indicators
    },
    item: {
      base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      wrapper: {
        off: "w-full flex-shrink-0 transform cursor-default snap-center",
        on: "w-full flex-shrink-0 transform cursor-grab snap-center",
      },
    },
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
      snap: "snap-x",
    },
  };

  return (
    <div className="w-full">
      <div className="flex w-full justify-center  h-80">
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

      {/* <h1>"Discover Ultimate Style Solution: Elevate Your Wardrobe with Trendsetting Footwear and Menswear! 🌟 Shop Now for Unmatched Comfort and Stylish Designs!"</h1> */}
      <div className="mt-10 h-64">
        <Carousel theme={carouselTheme}>
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col h-full items-center justify-center"
            >
              <div
                className="flex flex-col justify-center items-center w-36 text-center p-2 rounded-md flex-wrap"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                }}
              >
                <img src={product.image} alt={product.title} className="h-36" />
                <h3 className="text-xl font-semibold pb-10">{product.title}</h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="flex flex-col justify-center mt-10 items-center">
        <div className="font-semibold fancy-underline">
          <h1>Contact us:</h1>
        </div>
        <div className="flex mt-5 gap-5">
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

      <div className="flex flex-col gap-5 items-center justify-center w-full mt-6  text-center flex-wrap">
        <h1 className="font-semibold fancy-underline">Working Days/Hours</h1>
        <div>
        <p>Mon - Fri & Sun / 08:30 AM - 07:00 PM</p>
        <p>Sat / Holiday</p>
        </div>
      </div>

      <div className="flex flex-col mt-6 items-center ">
        <div className="font-semibold flex items-center justify-center gap-2 ">
          <h1>Address </h1>
          <Link to={map}>
            <FaMapMarkerAlt />
          </Link>
        </div>

        <div className="m-2 flex justify-center items-center gap-2 w-full flex-wrap text-center ml-1 mr-1">
          <span className="text-lg">
            Sara road,Near by shishu mandir school - halvad
          </span>
          {/* <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7344.878354530391!2d71.1821666!3d23.0076416!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395a2bd4987f3f39%3A0x2908aeaa2fef519!2sShreeji%20shoes%20%26%20meanswear!5e0!3m2!1sen!2sin!4v1706936679752!5m2!1sen!2sin" frameBorder="2" className="w-full h-48"></iframe> */}
          {/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          {/* </div> */}
        </div>
      </div>

      <div
        className="flex justify-center w-full bg-gray-600 text-white font-semibold text-[11px] flex-wrap mt-6 p-5 overflow-x-hidden"
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <p className="text-center">
          Copyright © {new Date().getFullYear()}, All Right Reserved{" "}
          <Link to={"/"}>Shreeji Shoes & Mens Wear</Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
