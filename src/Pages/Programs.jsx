import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Programs = () => {
  return (
    <section className="w-11/12 mx-auto">
      <Navbar></Navbar>
      <div className="h-[500px] flex justify-center items-center">
        <h1>Programs Page</h1>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Programs;