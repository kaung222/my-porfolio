import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import Navbar from "../components/home/Navbar";
import { motion } from "framer-motion";
import Work from "./Work";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div data-theme="light">
      <Navbar />
      <Hero />
      <div className="">
        <h2 className=" py-5 text-center text-normal">Works</h2>
        <div className="">
          <Work />
        </div>
        <Link to="/projects">
          <motion.button
            className="font-bold flex mt-5 mx-auto items-center bg-slate-800 text-white rounded justify-between px-3 duration-100 py-2 gap-3 hover:gap-6"
            // initial={{ x: -10 }}
            animate={[{ x: -10 }, { x: 0 }, { x: -10 }]}
            transition={{
              duration: 1,
              
              repeat: Infinity,
              ease: "linear"
            }}
            whileTap={{ scale: 0.4 }}
          >
            <span className="">See All Works </span>
            <span>
              <AiOutlineArrowRight />
            </span>
          </motion.button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
