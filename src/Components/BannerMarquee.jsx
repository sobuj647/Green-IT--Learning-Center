import React from "react";
import Marquee from "react-fast-marquee";
import {
  MdOutlineGrass,
  MdOutlineMarkEmailRead,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import { SiNodedotjs } from "react-icons/si";
import { TiSocialFacebookCircular } from "react-icons/ti";

const BannerMarquee = () => {
  return (
    <Marquee speed={50} gradient={false}>
      <div className="flex items-center gap-7 text-[#4d4d4d] font-semibold whitespace-nowrap">
        <span className="ml-7">Green IT & Learning Center</span>
        {/* <span>Providing innovative IT solutions since 2024</span> */}
        <span className="flex items-center gap-2">
          <span>
            <SiNodedotjs className="text-4xl text-[#04bebb]" />
          </span>
          Web Development
        </span>
        {/* <span>Web Development</span> */}
        <span className="flex items-center gap-2">
          <span>
            <MdOutlineGrass className="text-4xl text-[#04bebb]" />
          </span>
          Graphics Design
        </span>
        <span className="flex items-center gap-2">
          <span>
            <MdOutlineVideoLibrary className="text-4xl text-[#04bebb]" />
          </span>
          Video Editing
        </span>
        <span className="flex items-center gap-2">
          <span>
            <MdOutlineMarkEmailRead className="text-4xl text-[#04bebb]" />
          </span>
          Email Marketing
        </span>
        <span className="flex items-center gap-2">
          <span>
            <TiSocialFacebookCircular className="text-4xl text-[#04bebb]" />
          </span>
          Digital Marketing And Social Media Management
        </span>
      </div>
    </Marquee>
  );
};

export default BannerMarquee;
