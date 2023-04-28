import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import myPhoto from "../../assets/myPhoto.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <motion.div
        className="h-[60vh] px-5 md:px-[150px]"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <Link to="/about">
          <img
            src={myPhoto}
            alt="..."
            className="mt-[120px] w-[200px] mb-7 rounded-md shadow-xl"
          />
        </Link>
        <p className=" font-bold">I'm — a fullstack developer from Burma.</p>
        <p className=" font-light text-base">
          Currently serving for freelance projects.
        </p>
        <div className=" flex items-center justify-start mt-3 gap-3">
          <Link to="https://www.facebook.com/jamesmarcus122">
            <AiFillFacebook className="text-xl cursor-pointer hover:text-primary" />
          </Link>
          <Link to="https://www.instagram.com/bossmarcus99/">
            <AiFillInstagram className="text-xl cursor-pointer hover:text-primary" />
          </Link>
          <Link to="https://twitter.com/Hulksmash542128">
            <AiFillTwitterSquare className="text-xl cursor-pointer hover:text-primary" />
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="fixed bottom-5 right-5 md:bottom-[120px] md:right-[120px]"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ repeat: Infinity, duration: 2  }}
      >
        <AiOutlineArrowDown className=" text-xl" />
      </motion.div>
    </div>
  );
};

export default Hero;
