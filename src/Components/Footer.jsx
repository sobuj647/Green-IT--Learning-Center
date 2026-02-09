import React from "react";
import Logo from "../assets/images/logo.PNG";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
import { IoIosArrowUp } from "react-icons/io";
import { MdAddCall, MdOutlineDoubleArrow } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <section className="grid grid-cols-4 pb-2">
        <div>
          <img className="w-50 h-auto" src={Logo} alt="Logo" />
          <p className="text-[#303030] p-3">
            Green IT & Learning Center is a modern digital learning institute
            dedicated to helping students build practical IT and digital skills
            for a successful future.
          </p>
          <div className="flex items-center gap-6 p-3">
            <Link>
              <FaFacebook className="text-[35px]" />
            </Link>
            <Link>
              <FaLinkedin className="text-[35px]" />
            </Link>
            <Link>
              <FaInstagramSquare className="text-[35px]" />
            </Link>
          </div>
        </div>
        <div className="pl-15">
          <h2 className="text-[24px] text-[#303030] mt-4">Company</h2>
          <ul className="list-disc mt-4">
            <li className="pt-2">
              <Link>Our Activities</Link>
            </li>
            <li className="pt-2">
              <Link>Blog</Link>
            </li>
            <li className="pt-2">
              <Link>Services</Link>
            </li>
            <li className="pt-2">
              <Link>Clients</Link>
            </li>
            <li className="pt-2">
              <Link>Career</Link>
            </li>
          </ul>
        </div>
        <div className="pl-15">
          <h2 className="text-[24px] text-[#303030] mt-4">Our Programs</h2>
          <ul className="list-disc">
            <li className="pt-2">Video Editing</li>
            <li className="pt-2">Web Development</li>
            <li className="pt-2">Digital Marketing</li>
            <li className="pt-2">Graphic Design</li>
            <li className="pt-2">Social Media Management</li>
            <li className="pt-2">Email Marketing</li>
            <li className="pt-2">UI/UIX Design</li>
            <li className="pt-2">English Learning</li>
          </ul>
        </div>
        <div className="pl-15">
          <h2 className="text-[24px] text-[#303030] mt-4">Get in touch</h2>
          <p className="flex gap-2 items-center text-[16px] mt-5">
            <span>
              <MdAddCall />
            </span>
            Call / WhatsApp:
          </p>
          <Link>+880 1788 031 351</Link>
          <p className="text-[16px] mt-5">Need live support?</p>
          <Link>g.teamsupport@gmail.com</Link>
        </div>
      </section>
      <hr className="mx-5" />
      <div className="flex justify-between items-center px-3 py-5">
        <div className="space-x-3">
          <Link>Terms of Service</Link>
          <Link>Privacy Policy</Link>
          <Link>Cookie Policy</Link>
        </div>
        <div className="flex items-center gap-3">
          <p>© 2020 Green IT & Learning Center. All rights reserved</p>
          <button className="border-2 p-3">
            <IoIosArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
