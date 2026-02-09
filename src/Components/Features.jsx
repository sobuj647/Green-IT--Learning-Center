import React from "react";
import { IoBarChartOutline, IoLayers } from "react-icons/io5";
import { GoFileDirectoryFill } from "react-icons/go";
import { PiSpeedometer } from "react-icons/pi";
import { BsGrid1X2Fill } from "react-icons/bs";
import { RiRefreshFill } from "react-icons/ri";

const Features = () => {
    return (
      <div>
        <h1 className="text-center text-[45px] text-[#4d4d4d] font-bold leading-[1.1]">
          Our <span className="text-[#04bebb]">Unique</span> & Awesome <br />
          <span>
            Core <span className="text-[#04bebb]">Features</span>
          </span>
        </h1>
        <div className="grid grid-cols-3 pt-10 py-20">
          <div className="card-1 border-1 border-gray-300 border-t-0 border-l-0 text-center p-10 group">
            <span
              className="flex justify-center items-center mx-auto w-[100px] h-[100px] rounded-[50%] text-[50px] border-1 border-gray-200 
                   transition-all duration-300 ease-in-out 
                   group-hover:bg-[#04bebb] group-hover:scale-110 cursor-pointer"
            >
              <IoBarChartOutline className="transition-colors duration-300 group-hover:text-white" />
            </span>
            <h2 className="text-[24px] p-3 text-[#4d4d4d]">
              Career-Focused Learning
            </h2>
            <p className=" p-0 text-[#4d4d4d]">
              Created specifically for students and beginners, our programs are
              designed to build real-world digital skills.
            </p>
          </div>
          <div className="card-2 border-1 border-gray-300 border-t-0 text-center p-10 group">
            <span
              className="flex justify-center items-center mx-auto w-[100px] h-[100px] rounded-[50%] text-[50px] border-1 border-gray-200 
                   transition-all duration-300 ease-in-out 
                   group-hover:bg-[#04bebb] group-hover:scale-110 cursor-pointer"
            >
              <IoLayers className="transition-colors duration-300 group-hover:text-white" />
            </span>
            <h2 className="text-[24px] p-3 text-[#4d4d4d]">
              Practical & High-Quality Training
            </h2>
            <p className="text-[#4d4d4d]">
              We provide hands-on learning with clean materials, real examples,
              and industry-standard tools.
            </p>
          </div>
          <div className="card-3 border-1 border-gray-300 border-t-0 border-r-0 text-center p-10 group">
            <span
              className="flex justify-center items-center mx-auto w-[100px] h-[100px] rounded-[50%] text-[50px] border-1 border-gray-200 
                   transition-all duration-300 ease-in-out 
                   group-hover:bg-[#04bebb] group-hover:scale-110 cursor-pointer"
            >
              <GoFileDirectoryFill className="transition-colors duration-300 group-hover:text-white" />
            </span>
            <h2 className="text-[24px] p-3 text-[#4d4d4d]">
              All Essential Courses
            </h2>
            <p className="text-[#4d4d4d]">
              From Video Editing and Web Development to Digital Marketing and
              English Learning — everything you need in one place.
            </p>
          </div>
          <div className="card-4 border-1 border-gray-300 border-b-0 border-l-0 text-center p-10 group">
            <span
              className="flex justify-center items-center mx-auto w-[100px] h-[100px] rounded-[50%] text-[50px] border-1 border-gray-200 
                   transition-all duration-300 ease-in-out 
                   group-hover:bg-[#04bebb] group-hover:scale-110 cursor-pointer"
            >
              <PiSpeedometer className="transition-colors duration-300 group-hover:text-white" />
            </span>
            <h2 className="text-[24px] p-3 text-[#4d4d4d]">
              Flexible Learning Speed
            </h2>
            <p className="text-[#4d4d4d]">
              Learn at your own pace with smooth access across mobile, tablet,
              and desktop devices.
            </p>
          </div>
          <div className="card-5 border-1 border-gray-300 border-b-0 text-center p-10 group">
            <span
              className="flex justify-center items-center mx-auto w-[100px] h-[100px] rounded-[50%] text-[50px] border-1 border-gray-200 
                   transition-all duration-300 ease-in-out 
                   group-hover:bg-[#04bebb] group-hover:scale-110 cursor-pointer"
            >
              <BsGrid1X2Fill className="transition-colors duration-300 group-hover:text-white" />
            </span>
            <h2 className="text-[24px] p-3 text-[#4d4d4d]">
              Fully Guided Support
            </h2>
            <p className="text-[#4d4d4d]">
              Get mentor support, guidance, and learning assistance whenever you
              need it.
            </p>
          </div>
          <div className=" card-6 border-1 border-gray-300 border-b-0 border-r-0 text-center p-10 group">
            <span
              className="flex justify-center items-center mx-auto w-[100px] h-[100px] rounded-[50%] text-[50px] border-1 border-gray-200 
                   transition-all duration-300 ease-in-out 
                   group-hover:bg-[#04bebb] group-hover:scale-110 cursor-pointer"
            >
              <RiRefreshFill className="transition-colors duration-300 group-hover:text-white" />
            </span>
            <h2 className="text-[24px] p-3 text-[#4d4d4d]">
              Updated Curriculum
            </h2>
            <p className="text-[#4d4d4d]">
              Our courses are regularly updated to match the latest trends and
              market demands.
            </p>
          </div>
        </div>
      </div>
    );
}

export default Features;