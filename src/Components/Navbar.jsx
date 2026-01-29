import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Logo from "../assets/images/logo.PNG"

const Navbar = () => {
    return (
      <nav>
        <div className="flex justify-between items-center px-8 py-2 bg-[#ffffff] border-1 border-gray-100">
          <div className="pl-0">
            <img className="w-50 h-auto" src={Logo} alt="Logo" />
          </div>

          <div className="shadow-sm md:hidden">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow right-0"
                >
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Clients</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <button className="btn-1 btn w-45 ">
                      <span className="pr-8">
                        <FaArrowRight />
                      </span>
                      Order Now
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="hidden md:flex space-x-10 text-[#000000e6]">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <button className="btn-1 btn w-45 ">
              <span className="pr-8">
                <FaArrowRight />
              </span>
              Order Now
            </button>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;