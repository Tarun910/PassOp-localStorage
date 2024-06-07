import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white flex justify-around items-center px-4 py-2">
      <div className="logo font-bold">
        <span className="text-green-500">&lt;</span>
        Pass
        <span className="text-green-500">OP/&gt;</span>
      </div>
      <ul className="text-green-500">
        <li className="flex gap-4">
          <a className="hover:font-bold" href="#">
            Home
          </a>
          <a className="hover:font-bold" href="#">
            Menu
          </a>
          <a className="hover:font-bold" href="#">
            Contact
          </a>
          <a className="hover:font-bold" href="#">
            About
          </a>
        </li>
      </ul>
      <button className="text text-white bg-green-500 mx-2 rounded-full flex justify-between items-center px-6 ring-white ring-1 ">
        <img
          className="invert w-6 h-6 p-1"
          src="/icons/github.svg"
          alt="github"
        />
        Github
      </button>
    </nav>
  );
};

export default Navbar;
