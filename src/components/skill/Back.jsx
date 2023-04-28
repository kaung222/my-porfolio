import React from "react";
import { motion } from "framer-motion";

const Back = () => {
  return (
    <div>
      <div className="">
        {/* frontend */}
        <h1 className="font-bold mt-5 mb-2 text-2xl">Backend</h1>
        <motion.div
          className="w-full"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <label>SQL</label>
          <div className="h-[2px] w-full bg-warning">
            <div className=" bg-success h-[2px] w-3/4"></div>
          </div>
          <label>MySql</label>
          <div className="h-[2px] w-full bg-warning">
            <div className=" bg-success h-[2px] w-3/4"></div>
          </div>
          <label>PHP</label>
          <div className="h-[2px] w-full bg-warning">
            <div className=" bg-success h-[2px] w-3/4"></div>
          </div>
        </motion.div>
        <h1 className="font-bold mt-5 mb-2">Frameworks</h1>
        <motion.div
          className=""
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <label>Laravel (In Progress)</label>
          <div className="h-[2px] w-full bg-warning">
            <div className=" bg-success h-[2px] w-1/2"></div>
          </div>
        </motion.div>
        <h1 className="font-bold mt-5 mb-2">Others</h1>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <label>Git (VCS)</label>
          <div className="h-[2px] w-full bg-warning">
            <div className=" bg-success h-[2px] w-3/4"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Back;
