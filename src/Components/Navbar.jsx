import React from "react";
import "./Navbar.css";
import { FaArrowRight } from "react-icons/fa";
import Logo from "../assets/images/logo.PNG"
import { Link, NavLink } from "react-router";

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
                    <NavLink>Home</NavLink>
                  </li>
                  <li>
                    <NavLink>About</NavLink>
                  </li>
                  <li>
                    <NavLink>Programs</NavLink>
                  </li>
                  <li>
                    <NavLink>Clients</NavLink>
                  </li>
                  <li>
                    <NavLink>Blog</NavLink>
                  </li>
                  <li>
                    <NavLink>Contact</NavLink>
                  </li>
                  <li>
                    <NavLink>
                      <button className="btn-1 btn w-45 ">
                        <span className="pr-8">
                          <FaArrowRight />
                        </span>
                        Order Now
                      </button>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="hidden md:flex space-x-10 text-[#000000e6]">
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/Programs">Programs</NavLink>
            <NavLink to="/Clients">Clients</NavLink>
            <NavLink to="/Blog">Blog</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
            <NavLink>
              <button className="btn-1 btn w-45 ">
                <span className="pr-8">
                  <FaArrowRight />
                </span>
                Order Now
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;