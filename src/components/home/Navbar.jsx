import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { motion } from "framer-motion";

const Navbar = () => {
  const [show, setShow] = useState(false);
  // window.onscroll(() => setShow(false));
  // document.onclick(() => setShow(false));
  return (
    <div className="px-5 md:px-[100px]">
      <div className=" h-[70px] flex items-center justify-between border-b-[1px]">
        <Link to="/">
          <span className="text-xl px-2 py-1 cursor-pointer font-bold">J</span>
        </Link>
        <div className="block md:hidden">
          {show ? <button
            className="p-2 rounded-full bg-slate-100 "
            onClick={() => setShow(false)}
          >
            <GrClose />
          </button> : <button
            className="p-2 rounded-full bg-slate-100 "
            onClick={() => setShow(true)}
          >
            <BiMenuAltRight />
          </button>}
          
          
        </div>
        <motion.div
          className={` font-bold uppercase ${
            show
              ? "flex flex-col w-full gap-5 py-5 bg-white items-center z-30 justify-center absolute top-[80px] h-full left-0"
              : "hidden"
          } md:block`}
          // initial={{ y: 100 }}
          // animate={{ y: 0 }}
          // transition={{ duration: 0.7 }}
        >
          <NavLink to="/projects">
            <span className=" px-3 md:px-5 py-2 hover:text-gray-900 text-sm font-bold text-gray-500">
              Work
            </span>
          </NavLink>
          <NavLink to="/skill">
            <span className=" px-3 md:px-5 py-2 hover:text-gray-900 text-sm font-bold text-gray-500">
              Skill
            </span>
          </NavLink>
          <NavLink to="/about">
            <span className=" px-3 md:px-5 py-2 hover:text-gray-900 text-sm font-bold text-gray-500">
              About Me
            </span>
          </NavLink>
          <NavLink to="/contact">
            <span className=" px-3 md:px-5 py-2 hover:text-gray-900 text-sm font-bold text-gray-500">
              Contact
            </span>
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
