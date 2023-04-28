import React, { useState } from "react";
import Navbar from "../components/home/Navbar";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineArrowRight,
} from "react-icons/ai";
import Front from "../components/skill/Front";
import Back from "../components/skill/Back";
import { motion } from "framer-motion";
import Footer from "../components/home/Footer";

const Skills = () => {
  const [show, setShow] = useState(false);
  return (
    <div data-theme="light">
      <Navbar />

      <div className=" mt-10 md:mt-20 px-5 md:px-[100px] h-[80vh]">
        <div className="lg:flex md:flex items-center justify-between">
          <div className="flex items-center justify-around gap-5 md:gap-20 lg:gap-32">
            <motion.div
              className=" text-gray-500 gap-3 flex flex-col"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Link to="https://www.facebook.com/jamesmarcus122">
                <AiFillFacebook className="text-xl cursor-pointer hover:text-primary" />
              </Link>
              <Link to="https://www.instagram.com/bossmarcus99/">
                <AiFillInstagram className="text-xl cursor-pointer hover:text-primary" />
              </Link>
              <Link to="https://twitter.com/Hulksmash542128">
                <AiFillTwitterSquare className="text-xl cursor-pointer hover:text-primary" />
              </Link>
            </motion.div>
            <motion.div
              className=" w-[200px] md:w-[300px]"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1 className="font-bold">My Skills</h1>
              <p>
                I learned my skills in various ways such as inclass courses,
                youtube and reading documentation.
                <span className="flex-col flex items-start justify-center mt-3">
                  documentation sources :
                  <a
                    href="https://beta.es.reactjs.org"
                    className="text-primary hover:underline"
                  >
                    https://beta.es.reactjs.org
                  </a>
                  <a href="https://www.php.net" className="text-primary hover:underline">
                    https://www.php.net
                  </a>
                  <a href="https://www.w3schools.com" className="text-primary hover:underline">
                    https://www.w3schools.com
                  </a>
                  <a
                    href="https://redux-toolkit.js.org/"
                    className="text-primary hover:underline"
                  >
                    https://redux-toolkit.js.org
                  </a>
                  <a href="https://tanstack.com/" className="text-primary hover:underline">
                    https://tanstack.com
                  </a>
                  <a
                    href="https://laravel.com/docs/10.x"
                    className="text-primary hover:underline"
                  >
                    https://laravel.com/docs/10.x
                  </a>
                </span>
              </p>
            </motion.div>
          </div>
          <div className=" w-[200px] md:w-[300px]">
            {show ? <Back /> : <Front />}
            <div className=" absolute right-5 top-3/4 md:top-1/2">
              <button
                className="p-3 rounded-full bg-slate-200 "
                onClick={() => setShow(!show)}
              >
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
