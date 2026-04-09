
import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import OurService from "../services/OurService";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <OurService />
    </>
  );
};

export default Home;