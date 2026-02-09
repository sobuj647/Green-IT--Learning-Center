import React from "react";
import { Link } from "react-router";
import { CgArrowLongRight } from "react-icons/cg";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Support = () => {
    return (
      <div>
        <div className="flex gap-100 ">
          <div>
            <h1 className="text-[45px] text-[#303030] font-bold leading-[1.1]">
              Need Any Help? <br /> Say hello
            </h1>
            <p className="text-[#4d4d4d] py-2">
              If you have questions about our courses or learning programs, feel
              free to contact us or send us your details below.
            </p>
          </div>
          <div className="flex items-center justify-center gap-20">
            <span className="">
              <CgArrowLongRight className="text-[80px]" />
            </span>
            <Link className="text-[24px] text-[#4d4d4d]">
              g.teamsupport@gmail.com
            </Link>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-4 items-center h-[140px]">
          <div>
            <h1 className="text-[24px] text-[#303030] font-bold">
              Email Address
            </h1>
            <Link>g.teamsupport@gmail.com</Link>
          </div>
          <div>
            <h1 className="text-[24px] text-[#303030] font-bold">
              Phone Number
            </h1>
            <Link>+8801788031351</Link>
          </div>
          <div>
            <h1 className="text-[24px] text-[#303030] font-bold">
              Office Address
            </h1>
            <p>
              Shordar Para, Dhap Jail Road, <br />
              Rangpur, Bangladesh
            </p>
          </div>
          <div className="flex justify-end items-center gap-6">
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
        <hr />
        {/*plant */}
        <section className="flex items-center gap-100 py-10">
          <div>
            <h2 className="text-[45px] text-[#303030] font-bold leading-[1.1]">
              Looking to build your digital skills? Start learning today!
            </h2>
            <p className="text-[#303030] py-4">
              We are a modern learning center providing practical IT, digital
              marketing, and professional skill training.
            </p>
          </div>
          <button className="btn btn-1 bg-[#04bebb] text-white hover:bg-green-500">
            Submit Your Thought
          </button>
        </section>
      </div>
    );
};

export default Support;