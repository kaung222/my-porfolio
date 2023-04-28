import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className=" bg-slate-800 text-gray-500 mt-5 p-5 md:p-[150px]">
        <div className=" flex items-center justify-center gap-3">
          <Link to="https://www.facebook.com/jamesmarcus122">
            <AiFillFacebook className="text-2xl" />
          </Link>
          <Link to="https://www.instagram.com/bossmarcus99/">
            <AiFillInstagram className="text-2xl" />
          </Link>
          <Link to="https://twitter.com/Hulksmash542128">
            <AiFillTwitterSquare className="text-2xl" />
          </Link>
        </div>
        <div className=" flex items-center justify-center mt-4">
          <a href="/projects" className=" px-3 md:px-5 py-2">
            Work
          </a>
          <a href="/about" className=" px-3 md:px-5 py-2">
            About
          </a>
          <a href="/contact" className=" px-3 md:px-5 py-2">
            Contact
          </a>
        </div>
        {/* <h2 className="text-center mt-3 w-full">
          Copyright 2023 . All Rights Reserved.
        </h2> */}
      </div>
    </div>
  );
};

export default Footer;
