import React from "react";
import poster1 from "../assets/moviedb2.png";
import poster2 from "../assets/travelbook.png";
import poster3 from "../assets/social.png";
import poster4 from "../assets/ecomerce.png";
import poster5 from "../assets/blog.png";
import poster6 from "../assets/chef-guide.png";
import poster7 from "../assets/contact-app.png";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div data-theme="light">
      <div className="px-5 md:px-[100px] mt-10">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* chef guide  */}
          <motion.div
            className="card w-full md:w-[300px] p-5 rounded-xl shadow-md"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={poster6} alt="" className="rounded" />
            <div className=" flex flex-wrap gap-1 mt-2">
              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                React
              </span>
              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                DaisyUi
              </span>

              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                React-router
              </span>
              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                Tailwind css
              </span>
              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                Themealdb API
              </span>
            </div>
            <p className="my-5 font-bold">
              Chef guide website with react js TheMealDb
            </p>
            <div className="flex gap-2 items-center justify-between">
              <a
                href="https://magenta-jalebi-f3806b.netlify.app"
                className="text-primary hover:underline flex items-center gap-2"
              >
                <span>Preview</span>
                <span>
                  <BsBoxArrowUpRight />
                </span>
              </a>
              <a
                href="https://github.com/kaung222/chef-guide"
                className="text-primary hover:underline flex items-center gap-2"
              >
                <span>View Repo</span>
                <span>
                  <BsGithub />
                </span>
              </a>
              {/* something */}
            </div>
          </motion.div>
          {/* Movie Trailer App */}
          <motion.div
            className="card w-full md:w-[300px] p-5 rounded-xl shadow-md"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <img src={poster1} alt="" className=" rounded" />
            <div className=" flex flex-wrap gap-1 mt-2">
              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                React
              </span>
              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                Tmdb
              </span>
              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                Tailwind
              </span>
              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                Daisyui
              </span>
            </div>
            <p className="my-5 font-bold h-10">
              Movie Trailer App With TMDB API And DaisyUi
            </p>
            <div className="flex gap-2 items-center justify-between">
              <a
                href="https://delicate-maamoul-a822ed.netlify.app/"
                className="text-primary hover:underline flex items-center gap-2"
              >
                <span>Preview</span>
                <span>
                  <BsBoxArrowUpRight />
                </span>
              </a>
              <a
                href="https://github.com/kaung222/movie-trailer"
                className="text-primary hover:underline flex items-center gap-2"
              >
                <span>View Repo</span>{" "}
                <span>
                  <BsGithub />
                </span>
              </a>
            </div>
          </motion.div>
          {/* contact app  */}
          <motion.div
            className="card w-full md:w-[300px] p-5 rounded-xl shadow-md"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={poster7} alt="" className="rounded" />
            <div className=" flex flex-wrap gap-1 mt-2">
              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                React
              </span>
              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                Laravel Api
              </span>

              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                DaisyUi
              </span>
              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                Tailwind css
              </span>
              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                Themealdb API
              </span>
            </div>
            <p className="my-5 font-bold">
              Contact app with Laravel Api and Redux Toolkit
            </p>
            <div className="flex gap-2 items-center justify-between">
              <a
                href="https://elaborate-horse-bcc9a9.netlify.app"
                className="text-primary hover:underline flex items-center gap-2"
              >
                <span>Preview</span>
                <span>
                  <BsBoxArrowUpRight />
                </span>
              </a>
              <a
                href="https://github.com/kaung222/contact-api"
                className="text-primary hover:underline flex items-center gap-2"
              >
                <span>View Repo</span>
                <span>
                  <BsGithub />
                </span>
              </a>
            </div>
          </motion.div>
          {/* Travel booking website */}
          <motion.div
            className="card w-full md:w-[300px] p-5 rounded-xl shadow-md"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <img src={poster2} alt="" className=" rounded" />
            <div className=" flex flex-wrap gap-1 mt-2">
              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                HTML
              </span>
              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                CSS
              </span>
              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                Bootsrap
              </span>

              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                Vanila Js
              </span>
            </div>
            <p className="my-5 font-bold">
              Travel Booking Website , Deploy with GH-Pages
            </p>
            <div className="flex gap-2 items-center justify-between">
              <a
                href="https://kaung222.github.io/travel-booking-website/"
                className="text-primary hover:underline flex items-center gap-2"
              >
                <span>Preview</span>
                <span>
                  <BsBoxArrowUpRight />
                </span>
              </a>
              <a
                href="https://github.com/kaung222/travel-book"
                className="text-primary hover:underline flex items-center gap-2"
              >
                <span>View Repo</span>
                <span>
                  <BsGithub />
                </span>
              </a>
            </div>
          </motion.div>
          {/* Social Media Design */}
          <motion.div
            className="card w-full md:w-[300px] p-5 rounded-xl shadow-md"
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <img src={poster3} alt="" className="rounded" />
            <div className=" flex flex-wrap gap-1 mt-2">
              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                Vite React
              </span>
              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                Tailwind
              </span>
              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                Swal
              </span>
              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                API
              </span>
              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                Dummy JSON
              </span>
            </div>
            <p className="my-5 font-bold">
              Social media design with react.js and tailwind
            </p>
            <div className="flex gap-2 items-center justify-between">
              <a
                href="https://scintillating-peony-57b5a4.netlify.app"
                className="text-primary hover:underline flex items-center gap-2"
              >
                <span>Preview</span>
                <span>
                  <BsBoxArrowUpRight />
                </span>
              </a>
              <a
                href="https://github.com/kaung222/Social-media-design"
                className="text-primary hover:underline flex items-center gap-2"
              >
                <span>View Repo</span>
                <span>
                  <BsGithub />
                </span>
              </a>
            </div>
          </motion.div>
          {/* Travel Blog */}
          <motion.div
            className="card w-full md:w-[300px] p-5 rounded-xl shadow-md"
            initial={{ y: -400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <img src={poster4} alt="" className="rounded" />
            <div className=" flex flex-wrap gap-1 mt-2">
              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                Vite React
              </span>
              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                Json-server
              </span>
              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                DaisyUi
              </span>

              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                Fake Store Api
              </span>
              <span className=" bg-slate-600 text-white px-2 rounded-full text-sm">
                RTK
              </span>
            </div>
            <p className="my-5 font-bold">
              Complete Ecomerce with react.js and CRUD
            </p>
            <div className="flex gap-2 items-center justify-between">
              <a
                href="https://ephemeral-profiterole-5a078e.netlify.app"
                className="text-primary hover:underline flex items-center gap-2"
              >
                <span>Preview</span>
                <span>
                  <BsBoxArrowUpRight />
                </span>
              </a>
              <a
                href="https://github.com/kaung222/complete-react-shop"
                className="text-primary hover:underline flex items-center gap-2"
              >
                <span>View Repo</span>
                <span>
                  <BsGithub />
                </span>
              </a>
            </div>
          </motion.div>
          {/* something */}

          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default Work;
