import React from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import AllProjects from "../components/AllProjects";

const Projects = () => {
  return (
    <div data-theme="light">
      <Navbar />
      <AllProjects />
      <Footer />
    </div>
  );
};

export default Projects;
