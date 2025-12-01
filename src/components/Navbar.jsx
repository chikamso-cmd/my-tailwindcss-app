import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] ">REACT.</h1>
      <ul className=" hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div
        onClick={handleNav}
        className="block md:hidden cursor-pointer ease-in-out duration-500"
      >
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] duration-500 ease-in-out"
            : "-left-full fixed "
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] px-5 py-3 cursor-pointer">
          REACT.
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b duration-500 border-gray-600 hover:text-[#00df9a] cursor-pointer">
            Home
          </li>
          <li className="p-4 border-b duration-500 border-gray-600 hover:text-[#00df9a] cursor-pointer transition-all">
            Company
          </li>
          <li className="p-4 border-b duration-500 border-gray-600 hover:text-[#00df9a] cursor-pointer transition-all">
            Resources
          </li>
          <li className="p-4 border-b duration-500 border-gray-600 hover:text-[#00df9a] cursor-pointer transition-all">
            About
          </li>
          <li className="p-4 hover:text-[#00df9a] duration-500 transition-all  cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};
