import React from "react";
import ProgramsCards from "./ProgramsCards";

const OurPrograms = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-[45px] text-[#303030] font-bold">
          Our Programs
        </h1>
        <p className="text-center text-[#4d4d4d]">
          Our courses are designed to teach practical digital skills to help you <br />
          succeed in the professional world.
        </p>
      </div>
      <ProgramsCards></ProgramsCards>
    </div>
  );
};
export default OurPrograms;
