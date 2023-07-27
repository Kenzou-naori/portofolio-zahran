// eslint-disable-next-line no-unused-vars
import React from "react";
// import Section from "../components/commons/Section";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import avad from "../assets/avad.png";
import pdf from "../assets/CVNaufalMZahran.pdf";

// eslint-disable-next-line react/prop-types
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="min-h-fit flex flex-col justify-start items-center mt-20 py-16 px-5 text-center "
      id="About"
      data-aos="fade-down"
      data-aos-delay="300"
      data-aos-duration="3000"
    >
      <div className="flex flex-col md:flex-row justify-between max-w-5xl">
        <img
          src={avad}
          alt="miku"
          className="h-70 w-60 md:h-full md:w-96"
          data-aos="flip-right"
          data-aos-delay="200"
          data-aos-duration="1200"
        />

        <div>
          <h3 className="py-3 text-3xl lg:text-5xl text-start">About Me</h3>
          <h2
            className="text-start font-extralight tracking-widest"
            // data-aos="zoom-in"
            // data-aos-duration="1000"
          >
            My name is Naufal Muhammad Zahran, i was born in Bogor 23 Mei. I am
            student with interest in Web designing. I am interested in working
            and being able to develop experience in the IT field, especially in
            the front end.
          </h2>
          <div>
            <a
              href={pdf}
              download
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center justify-center w-32 rounded-t-xl rounded-b-xl mt-2 border-2 border-black text-black dark:border-white dark:text-white hover:bg-sky-600
               hover:text-white hover:border-sky-600  duration-200 py-2 rounded-lg "
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
