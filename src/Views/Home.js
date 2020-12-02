import React, { useState } from "react";
import Welcome from "../components/home/Welcome";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Welcome />
      <About />
      <Skills />
    </>
  );
};

export default Home;
