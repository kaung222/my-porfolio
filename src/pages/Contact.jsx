import React, { useState } from "react";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import { GoLocation, GoMail } from "react-icons/go";
import { AiOutlinePhone } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const data = { name, email, message };
  const sendEmailHandler = (data) => {
    emailjs.send(
      "service_i3axeih",
      "template_n0e321h",
      {
        to_name: "James",
        from_name: data.name,
        message: data.message,
        reply_to: data.email,
        reciever_mail: "thirdgodiswinning@gmail.com",
      },
      "Bpe4MAFntj8wtjcdh"
    );
    swal("Thanks you for messaging me", data.name);
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <div data-theme="light">
      <Navbar />
      <div className=" mt-10 md:mt-20 px-5 md:px-[100px] pb-10">
        <h3 className="text-3xl">Contact Me</h3>
        <div className=" mt-6 md:mt-14">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="bg-slate-100 px-2 py-1 outline-none rounded w-full my-1"
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="bg-slate-100 px-2 py-1 outline-none rounded w-full my-1"
          />
          <textarea
            cols="20"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-slate-100 px-2 py-1 outline-none rounded w-full my-1"
            placeholder="Message"
          ></textarea>
          <button
            className="bg-black px-2 py-1 outline-none rounded w-full my-1 text-white"
            onClick={() => sendEmailHandler(data)}
          >
            Send Message
          </button>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.188767404719!2d96.18895454502409!3d16.86655412151727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c193bf69c3aeeb%3A0xcefeaee48731458c!2sSepak%20Takraw%20Factory!5e0!3m2!1sen!2smm!4v1679830505158!5m2!1sen!2smm"
          className="w-full h-[60vh] mt-5"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="flex flex-col md:flex-row mt-5 items-center gap-4 justify-between">
          <div className="font-light text-sm">
            <span>
              <AiOutlinePhone />
            </span>
            <span>09 797 961 628</span>
          </div>
          <div className="font-light text-sm">
            <span>
              <GoMail />
            </span>
            thirdgodiswinning@gmail.com
          </div>
          <div className="font-light text-sm">
            <span>
              <GoLocation />
            </span>
            <span>No.109/32 Yd,Latwethondra St. North Dagon</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
