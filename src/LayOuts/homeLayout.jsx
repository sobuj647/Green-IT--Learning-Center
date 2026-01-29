import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";

const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <main className="pt-30">
        <section>
          <h1 className="text-center text-[45px] text-[#4d4d4d] font-bold leading-[1.1]">
            Our <span className="text-[#04bebb]">Unique</span> & Awesome <br />
            <span>
              Core <span className="text-[#04bebb]">Features</span>
            </span>
          </h1>
          <div>
            <div>
              <h2>Created specifically for startups</h2>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeLayout;
