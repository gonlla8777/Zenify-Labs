import React from "react";
import Logo from "/image/Logo.svg";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div>
        <div className="bg-gradient-to-t from-neutral-800  to-neutral-950  w-auto flex items-end pt-2 text-white">
          <Link to={"/"} className="flex">
            <img src={Logo} className="w-20" />
            <div className="flex text-3xl pl-2 pb-2">
              <p>Zenify</p> <span className="px-2 "></span>{" "}
              <p className="text-green-600">Labs</p>
            </div>
            <p className="pb-7">TM</p>
          </Link>
        </div>

        <IoSettings className="absolute right-10 top-5 text-white text-4xl" />
      </div>
    </>
  );
};
export default Navbar;
