import React, { useState } from "react";
import Welcome from "../components/home/Welcome";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";

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
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
