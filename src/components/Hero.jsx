// eslint-disable-next-line no-unused-vars
import React from "react";
// import { FaTwitter, FaFacebook, FaLinkedin, FaArrowDown } from "react-icons/fa";
import avatar from "../assets/avas.png";
// import Section from "../components/commons/Section";

const Hero = () => {
  // const SOCIAL = [
  //   {
  //     id: 1,
  //     link: "https://twitter.com",
  //     icon: <FaTwitter />,
  //   },
  //   {
  //     id: 2,
  //     link: "https://facebook.com",
  //     icon: <FaFacebook />,
  //   },
  //   {
  //     id: 3,
  //     link: "https://linkedin.com",
  //     icon: <FaLinkedin />,
  //   },
  // ];

  // window.addEventListener("scroll", function () {
  //   const downArrow = this.document.querySelector(".down-arrow");

  //   if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
  //   else downArrow.classList.remove("hide-down-arrow");
  // });

  return (
    <section className=" max-w-full flex md:flex-row flex-col justify-evenly items-center p-7 sm:p-12 lg:p-12  " id="Hello">
      <div>
        <h2
          className="text-2xl md:text-3xl lg:text-4xl text-sky-600 select-none font-extrabold tracking-widest"
          id="NaraKen"
        >
          NaraKen
        </h2>
        <h3 className="py-3 text-2xl md:text-6xl max-w-2xl md">
          Front End Developer & Student
        </h3>
        <a
          href="#About"
          className="flex items-center justify-center w-32 rounded-tr-3xl rounded-bl-3xl hover:rounded-tl-3xl hover:rounded-br-3xl  mt-3 border-2 border-sky-300 text-sky-300 hover:bg-sky-600 hover:text-white hover:border-sky-600 duration-200 py-2 rounded-lg "
        >
          About Me
        </a>
        {/* <p className="max-w-xl font-light text-gray-500">
          Hello <span className="animate-pulse text-4xl">👋</span>, welcome to
          my site. I am a Student in SMKN 1 Ciomas. I love to designing website.
        </p> */}
      </div>

      {/* social icons */}

      {/* avatar and resume */}
      <div className="flex justify-end md:mt-0 mt-5 ">
        <img
          src={avatar}
          alt="avatar"
          className="w-60 h-60 md:w-5/6 md:h-5/6 object-cover object-top bg-gradient-to-b from-sky-600 rounded-t-3xl pt-5 select-none"
        />
        {/* <a
          href="/yash-resume.pdf"
          download={true}
          className="flex items-center justify-center mt-10 bg-gradient-to-r from-sky-600 to-teal-500 text-white py-2 rounded-lg "
        >
          Download CV
        </a> */}
      </div>

      <div></div>

      {/* arrow down animation */}
      {/* <div className="mt-10 down-arrow">
        <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />
      </div> */}
    </section>
  );
};

export default Hero;
