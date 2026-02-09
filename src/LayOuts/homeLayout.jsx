import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Features from "../Components/Features";
import Support from "../Components/Support";
import OurPrograms from "../Components/OurPrograms";

const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <main className="pt-30">
        {/* Features-section */}
        <section className="p-3">
          <Features></Features>
        </section>

        {/* Our Programs section */}
        <section className="border-2 h-[500px]">
          <OurPrograms></OurPrograms>
        </section>

        {/* Blog section */}
        <section className="border-2 h-[500px] mt-2">
          <div>
            <h1 className="text-center text-[45px] text-[#303030] font-bold">
              Explore Our Blog Posts
            </h1>
            <p className="text-center text-[#4d4d4d]">
              Dive into the latest insights, trends, and expert advice from IT
              Lab Solutions. Our blog is a rich resource designed to keep you
              informed about cutting-edge technologies, industry best practices,
              and practical tips for digital transformation.
            </p>
          </div>
        </section>

        {/* Technology Partner */}
        <section className="border-2 h-[500px] mt-4">
          <div>
            <h1 className="text-center text-[45px] text-[#303030] font-bold leading-[1.1]">
              Our Technology <br />
              <span>Partner</span>
            </h1>
            <p className="text-center text-[#4d4d4d]">
              These partnerships empower IT Lab Solutions to deliver
              comprehensive and <br /> scalable IT ecosystems that drive
              business growth and digital transformation <br /> across various
              sectors.
            </p>
          </div>
        </section>

        {/* Support & plant Section */}
        <section className="mt-5 p-3">
          <Support></Support>
        </section>

        {/* Tecnology section */}
        <section></section>
      </main>

      {/* Footer section */}
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
