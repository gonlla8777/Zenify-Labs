import React from "react";
import Logo from "/image/logo.ico";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Link to={"/"}>
        <div className="bg-gradient-to-t from-neutral-800  to-neutral-950  w-screen flex items-end pt-2 text-white">
          <img src={Logo} className="w-32" />
          <div className="flex text-3xl pl-2 pb-2">
            <p>Zenify</p> <span className="px-2 "></span>{" "}
            <p className="text-green-600">Labs</p>
          </div>
          <p className="pb-7">TM</p>
          <IoSettings className="absolute right-10 text-5xl" />
        </div>
      </Link>
    </>
  );
};
export default Navbar;
