import React from "react";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import myPhoto from "../assets/myPhoto.jpg";
import { motion } from "framer-motion";
import FileSaver from "file-saver";

const About = () => {
  const saveHandler = () => {
    console.log("object");
    const response = FileSaver.saveAs(
      "https://drive.google.com/file/d/1r03-i-K9KVRC_zZRkxCJmx21Ml5bEt5N/view?usp=share_link",
      "my-cv.jpg"
    );
    console.log(response);
  };
  return (
    <div data-theme="light">
      <Navbar />
      <div className="">
        <div className=" mt-10 md:mt-20 px-5 md:px-[100px] pb-10">
          <h1 className="mb-10 text-xl font-bold">About James</h1>
          <motion.div
            className="font-semibold my-2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span>Education : </span>
            <span>Myanmar Maritime University (Withdrawing 3rd year)</span>
            <br />
            <span>Experience : </span>
            <span> Over one year (Web Development)</span>
            <br />
            <span>Mentor : </span> <span>MMSIT</span>
          </motion.div>
          <div className="md:flex flex-col items-center justify-center gap-11">
            <motion.p
              className="text-sm text-justify"
              initial={{ y: 100, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              I am a third-year student at the Myanmar Maritime University, born
              in the year 2000, with a passion for web development. I have been
              learning web development for two years now and have gained
              valuable experience in this field. As a student of the Myanmar
              Maritime University, I have been exposed to a diverse range of
              academic and extracurricular activities. This experience has
              helped me develop a strong work ethic, attention to detail, and a
              passion for learning and it leads me to pursue my academic and
              career goals. With my passion for web development and academic
              achievements, I am well-positioned to excel in my chosen field and
              make a significant contribution to the world of technology.
            </motion.p>
            <motion.div
              className="mt-5"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img src={myPhoto} alt="" className=" rounded-md" />
            </motion.div>
          </div>
          <div className=" flex items-center justify-center mt-5 gap-5">
            <motion.button
              className="px-3 py-1 rounded-full border-slate-600 border-[1px] bg-slate-400 text-white"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              onClick={() => saveHandler()}
            >
              Download CV
            </motion.button>
            <a href="tel:09797961628">
              <motion.button
                className=" px-3 py-1 rounded-full border-slate-600 border-[1px] bg-white text-primary"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Call To James
              </motion.button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
