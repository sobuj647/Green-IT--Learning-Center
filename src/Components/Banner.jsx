import React from "react";
import BannerImage from "../assets/images/banner.JPG";
import { GoDotFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import BannerMarquee from "./BannerMarquee";

const Banner = () => {
  return (
    <div className="flex mt-10 ">
      <div>
        <div className="text-[#4d4d4d]">
          <p className="text-[20px] p-2 rounded-2xl bg-[#04bebb] inline-block">
            <span className="flex items-center text-white gap-2">
              <span className="bg-[#0404be] rounded-2xl">
                <GoDotFill />
              </span>
              We have been there since 2020
            </span>
          </p>
          <p className="text-[45px] py-3 font-semibold leading-[1.1] my-3">
            Our Strength in Your <br />
            <span>Digital Progress</span>
          </p>
          <p className="text-black">
            Green IT & Learning Center is a trusted digital learning institute
            in Bangladesh, <br /> helping students build strong IT skills for a better
            future.
          </p>
        </div>
        <div className="mt-10">
          <button className="btn-1 btn w-45 bg-[#04bebb] text-white hover:bg-green-500">
            <span className="pr-6 text-white">
              <FaArrowRight />
            </span>
            Enroll Now
          </button>
          <button className="btn-1 btn w-40 ml-[50px] ">
            <span className="">
              <CiYoutube />
            </span>
            How We Works
          </button>
        </div>
        <div className="w-[710px] mt-8 p-5 text-[20px]">
          <BannerMarquee></BannerMarquee>
        </div>
      </div>
      <div>
        <img
          className="w-[900px] h-[420px] rounded-lg"
          src={BannerImage}
          alt="....Loading"
        />
      </div>
    </div>
  );
};

export default Banner;
