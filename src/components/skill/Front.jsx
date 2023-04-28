import React from "react";
import { motion } from "framer-motion";

const Front = () => {
  return (
    <div>
      <div className="">
        {/* frontend */}
        <h1 className="font-bold mt-5 mb-2 text-2xl">Frontend</h1>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <label>Html</label>
          <div className="h-[2px] w-full bg-warning">
            <div className=" bg-success h-[2px] w-3/4"></div>
          </div>
          <label>Css</label>
          <div className="h-[2px] w-full bg-warning">
            <div className=" bg-success h-[2px] w-3/4"></div>
          </div>
          <label>Js</label>
          <div className="h-[2px] w-full bg-warning">
            <div className=" bg-success h-[2px] w-3/4"></div>
          </div>
          <label>Rest Api</label>
          <div className="h-[2px] w-full bg-warning">
            <div className=" bg-success h-[2px] w-full"></div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-bold mt-5 mb-2">Frameworks</h1>
          <label>Tailwind</label>
          <div className="h-[2px] w-full bg-warning">
            <div className=" bg-success h-[2px] w-3/4"></div>
          </div>
          <label>Bootstrap</label>
          <div className="h-[2px] w-full bg-warning">
            <div className=" bg-success h-[2px] w-full"></div>
          </div>
          <label>React (Includes RTK)</label>
          <div className="h-[2px] w-full bg-warning">
            <div className=" bg-success h-[2px] w-full"></div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-bold mt-5 mb-2">UI Libraries</h1>
          <label>Chakra UI , DaisyUi , Framer Motion</label>
        </motion.div>
      </div>
    </div>
  );
};

export default Front;
